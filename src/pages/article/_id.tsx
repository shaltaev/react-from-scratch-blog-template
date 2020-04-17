import React, { FC, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { Context } from '~/store/articles'

type ArticleContextType = import('~/store/articles').ContextType

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Aside } from "~/components/Aside"
import { Article } from "~/components/article"

const PageArticleId: FC = () => {
    const { id } = useParams()
    const { state: articleState } = useContext<ArticleContextType>(Context)

    const idAsNumOrUndef = id ? parseInt(id) : undefined
    const article = typeof idAsNumOrUndef === 'number' ? articleState.articles[idAsNumOrUndef] : undefined

    return (
        <LayoutDefault
            header={<Header />}
            content={
                <div>
                    <Article article={article} />
                </div>
            }
            aside={<Aside />}
            footer={<Footer />}
        />
    )
}

export { PageArticleId }
