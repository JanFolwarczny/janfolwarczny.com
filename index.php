<?php

use Nette\Application\Application;
use Nette\Configurator;
use Nette\Utils\FileSystem;



require __DIR__ . '/vendor/autoload.php';
require __DIR__ . '/data/Data.php';


define('LOG_DIR', __DIR__ . '/log');
define('TEMP_DIR', __DIR__ . '/temp');


FileSystem::createDir(LOG_DIR);
FileSystem::createDir(TEMP_DIR);


$debugAddresses = ["90.181.241.34", "91.187.57.248", "212.158.158.178", "46.174.152.37", "127.0.0.1", "::1"];
$debugMode = $_SERVER['HTTP_USER_AGENT'] == 'debug' ? $debugAddresses : false;


$configurator = new Configurator;
$configurator->setDebugMode($debugMode);
$configurator->enableDebugger(LOG_DIR, "jan@janfolwarczny.com");
$configurator->setTempDirectory(TEMP_DIR);
$configurator->addConfig(__DIR__ . '/config.neon');
$container = $configurator->createContainer();
$container->addService('router', new Data(__DIR__ . '/data', TEMP_DIR, $container));
$container->getByType(Application::class)->run();
