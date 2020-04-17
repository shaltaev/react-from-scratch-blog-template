import React, { FC, useContext } from 'react'

import { Link } from 'react-router-dom'

import { Context } from '~/store/articles'

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Aside } from "~/components/Aside";


type PostContextType = import('~/store/articles').ContextType

const PageNewsList: FC = () => {
    const { state } = useContext<PostContextType>(Context)
    if (state.articles.length > 0) {
        return (
            <>
                {state.articles.map((article, index) => {
                    return (
                        <li key={article.time}>
                            <Link to={`article/${index}`}>{article.title}</Link>
                        </li>
                    )
                })}
            </>
        )
    } else {
        return <li>No Content yet</li>
    }
}

const PageNews: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PageNewsList />
                </ul>
            }
            aside={<Aside />}
            footer={<Footer />}
        />
    )
}

export { PageNews }
