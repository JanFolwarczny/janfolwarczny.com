<?php


use Latte\CompileException;
use Latte\Engine;
use Latte\MacroNode;
use Latte\Macros\MacroSet;
use Latte\PhpWriter;
use Nette\Application\Routers\Route;
use Nette\Application\Routers\RouteList;
use Nette\DI\Container;
use Nette\Http\Request;
use Nette\Utils\FileSystem;
use Nette\Utils\Html;
use Nette\Utils\Image;
use Nette\Utils\Strings;



final class Data extends RouteList {


    /** @var Container */
    private $container;



    public function __construct($dataDir, $cacheDir, Container $container) {
        parent::__construct();
        $this->container = $container;

        /** @var Request $request */
        $request = $container->getByType(Request::class);
        $currentUrl = $request->getUrl();
        $flags = $request->isSecured() ? Route::SECURED : 0;

        $cacheFile = "{$cacheDir}/data.php";
        if (is_file($cacheFile)) {
            $data = require $cacheFile;
        } else {
            $data = $this->scanData($dataDir);
            FileSystem::write($cacheFile, '<?php return ' . var_export($data, true) . ';');
        }

        foreach ($data['routes'] as $mask => &$route) {
            $this[] = new Route($mask, function ($presenter) use (& $route, & $data, $currentUrl) {
                $latte = $this->initLatte($route);
                $params = array_merge($data,
                    $route,
                    [
                        'url' => Strings::trim($currentUrl, "/"),
                        'baseUrl' => $currentUrl->baseUrl,
                        'pathClass' => Strings::webalize($route['path'])
                    ]);

                $latte->render($params['lattePath'], $params);
            }, $flags);
        }
    }



    public function scanData($dataDir) {
        $data = [];

        /** @var SplFileInfo $fileinfo */
        foreach (new FilesystemIterator($dataDir) as $fileinfo) {
            if (!$fileinfo->isDir()) {
                continue;
            }

            $route = [
                'title' => "",
                'description' => "",
            ];
            $route['path'] = $path = $fileinfo->getFilename();
            $route['dir'] = $dir = "{$dataDir}/{$path}";
            $route['urlPath'] = $urlPath = $path == 'index' ? '' : $path;
            $route['lattePath'] = "{$dir}/{$path}.latte";
            $route['dataUrlPath'] = "/" . basename($dataDir) . "/{$path}";
            $data['routes'][$urlPath] = $route;

            $latte = $this->initLatte($data['routes'][$urlPath]);
            $latte->compile($route['lattePath']);
        }

        return $data;
    }



    public function initLatte(array & $route) {
        /** @var Engine $latte */
        $latte = $this->container->getService('nette.latteFactory')->create();
        $latte->onCompile[] = function (Engine $latte) use (& $route) {
            $set = new MacroSet($latte->getCompiler());


            $set->addMacro('image',
                function (MacroNode $node, PhpWriter $writer) use (& $route) {
                    $dir = $route['dir'];
                    $dataUrlPath = $route['dataUrlPath'];
                    $splits = Strings::split($node->args, '~[ ,]+~');
                    $path = array_shift($splits);

                    if (!is_file("$dir/$path")) {
                        throw new CompileException("Image not exists on path {$dir}/{$path}");
                    }

                    if (!$size = @getimagesize("$dir/$path")) {
                        throw new CompileException("File on path {$dir}/{$path} is not an image");
                    }

                    $splits[] = Strings::webalize(pathinfo($path, PATHINFO_FILENAME), "_", false);

                    $image = Image::fromFile("$dir/$path");
                    $image->resize(40, 40);
                    $dataUri = Latte\Runtime\Filters::dataStream($image->toString(Image::JPEG, 50));

                    $img = Html::el('img alt=""');
                    $img->data('src', "$dataUrlPath/$path");
                    $img->src = $dataUri;

                    $imgns = Html::el("img alt='' src='$dataUrlPath/$path'");

                    $loader = Html::el('div class=loader');
                    $loader->style = "padding-bottom:" . ($size[1] / $size[0] * 100) . "%";

                    $inner = Html::el('div class=inner');
                    $inner->style = "max-width:{$size[0]}px; max-height:{$size[1]}px;";
                    $inner->add($loader);
                    $inner->add($img);
                    $inner->create("noscript")->add($imgns);

                    $div = Html::el('div');
                    $div->class = ['image'] + $splits;
                    $div->add($inner);

                    return $writer->write("echo '{$div}';");
                });

            $set->addMacro('imagerow',
                function (MacroNode $node, PhpWriter $writer) {
                    $div = Html::el('div class=imagerow');

                    return $writer->write("echo '{$div->startTag()}';");
                },
                function (MacroNode $node, PhpWriter $writer) {
                    return $writer->write("echo '</div>';");
                });

            $set->addMacro('title',
                function (MacroNode $node, PhpWriter $writer) use (& $route) {
                    $route['title'] = Strings::trim($node->args, "'\"");
                });

            $set->addMacro('description',
                function (MacroNode $node, PhpWriter $writer) use (& $route) {
                    $route['description'] = Strings::trim($node->args, "'\"");
                });

            $set->addMacro('cover',
                function (MacroNode $node, PhpWriter $writer) use (& $route) {
                    $route['cover'] = Strings::trim($node->args, "'\"");
                    $route['coverUrlPath'] = $route['dataUrlPath'] . "/" . Strings::trim($node->args, "'\"");
                });
        };

        return $latte;
    }
}