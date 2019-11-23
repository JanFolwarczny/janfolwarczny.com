import React from 'react'
import BlogListArticle from "./BlogListArticle";


const BlogList = () => {
    return <div>
        <BlogListArticle
            img={'https://kvikymart.com/static/og-image-2018-09-43eaf11885c66380f142047ba3e423a4.png'}
            link={'https://www.ms-ic.cz/en/kvikymart-a-revolution-for-e-shops-selling-aftermarket-car-parts/'}
            title={'KVIKYMART: A Revolution for Online Shops Selling Car Parts'}
            date={'2019-04-23'}
            lang={'en'}
            medium={'Moravian-Silesian Innovation Center'}>
            {/* description */}
        </BlogListArticle>

        <BlogListArticle
            img={'https://kvikymart.com/static/article_3-a3ca3fcecce8b7a723e7ba4518a5990f.jpg'}
            link={'https://bit.ly/2m2g89k'}
            title={'Ostravská firma vyvinula unikátní e-shop s autodíly'}
            date={'2019-04-01'}
            lang={'en'}
            medium={'Patriot Magazín'}>
            {/* description */}
        </BlogListArticle>

        <BlogListArticle
            img={'https://kvikymart.com/static/article_2-dd288b9860e6fe5d68ba27d247526094.jpg'}
            link={'https://bit.ly/kvikymart-autodily-21-stoleti'}
            title={'KVIKYMART: "Posunuli jsme obchodování s autodíly do 21. století" (in Czech)'}
            date={'2019-01-08'}
            lang={'cs'}
            medium={'Peak.cz'}>
            {/* description */}
        </BlogListArticle>

        <BlogListArticle
            img={'https://kvikymart.com/static/article_0-55fa5afb48dbe86ca92481c7fab806e4.jpg'}
            link={'https://bit.ly/kvikymart-zmenili-jsme-automobilovy-aftermarket'}
            title={'KVIKYMART: "Změnili jsme automobilový aftermarket (in Czech)'}
            date={'2017-08-17'}
            lang={'cs'}
            medium={'StartupJobs'}>
            {/* description */}
        </BlogListArticle>

        <BlogListArticle
            img={'https://strv.ghost.io/content/images/2016/06/IMG_2091.JPG'}
            link={'https://www.strv.com/blog/silicon-valley-contest-winners-tour-san-francisco-bay-area-tech-giants'}
            title={'Tour of the San Francisco Bay Area Tech Gigants'}
            date={'2016-05-27'}
            lang={'en'}
            medium={'STRV'}>
            {/* description */}
        </BlogListArticle>

        <BlogListArticle
            img={'https://img.youtube.com/vi/Gqkyc0pgxWQ/0.jpg'}
            link={'https://www.strv.com/blog/strvs-silicon-valley-contest-winners-are'}
            title={'STRV’s Silicon Valley Contest Winner'}
            date={'2016-02-01'}
            lang={'en'}
            medium={'STRV'}>
            {/* description */}
        </BlogListArticle>

    </div>;
};

export default BlogList;
