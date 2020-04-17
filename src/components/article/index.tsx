import React, { FC } from 'react'
import styles from './style.css'

type Article = import('~/models/article').Article

interface PropsArticle {
    article: Article | undefined
}

const blocks = (blocks: Article['blocks']) => {
    return blocks.map((block, index) => <div key={index}>{ JSON.stringify(block) }</div>)
}

const Article: FC<PropsArticle> = (props) => {
    const { article } = props
    return (
        article ?
        <div className={styles.article}>
            <div>{'time ' + article.time }</div>
            <div>{'title ' + article.title }</div>
            <div>{'version ' + article.version }</div>
            <br />
            {blocks(article.blocks)}
        </div>
            :
            <div className={styles.article}>
                <span>Not existing article</span>
            </div>
        )
}

export { Article }
