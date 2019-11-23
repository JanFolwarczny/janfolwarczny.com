import React from 'react'
import Anchor from "./Anchor";
import styles from './BlogListArticle.module.css';


const BlogListArticle = (props) => {
    const date = new Date(props.date);
    return <article className={styles.article}>
        <div className={styles.imageWrap}>
            <Anchor href={props.link} hreflang={props.lang}>
                <img src={props.img} alt={props.title}/>
            </Anchor>
        </div>
        <div className={styles.textWrap}>
            <time dateTime={props.date} className={styles.date}>{date.toLocaleDateString('en', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            })}</time>
            <span className={styles.medium}>{props.medium}</span>
            <h1 className={styles.title}>
                <Anchor href={props.link} hreflang={props.lang}>{props.title}</Anchor>
            </h1>
            <div className={styles.perex}>{props.children}</div>
            <Anchor href={props.link} hreflang={props.lang}>Read full post →</Anchor>
        </div>
    </article>
};

export default BlogListArticle;
