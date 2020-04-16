import React, { FC, useContext } from 'react'

import { useParams, Link } from 'react-router-dom'
import { Context } from '~/store/articles'

type PostContextType = import('~/store/articles').ContextType

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

const PageArticleReadContent: FC = () => {
    const { postId } = useParams()
    const { state } = useContext<PostContextType>(Context)

    const postIDAsNumOrUndef = postId ? parseInt(postId) : undefined

    if (
        postIDAsNumOrUndef !== undefined &&
        `${postIDAsNumOrUndef}` === postId &&
        state.articles.length - 1 >= postIDAsNumOrUndef &&
        postIDAsNumOrUndef >= 0
    ) {
        return <>{JSON.stringify(state.articles[postIDAsNumOrUndef])}</>
    } else {
        return <>Exact post not exist</>
    }
}

const PageArticleId: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PageArticleReadContent />
                </ul>
            }
            aside={[
                <Link to={`/articles/new`} key="1">
                    New articles
                </Link>,
                <Link to={`/articles`} key="2">
                    Home
                </Link>,
            ]}
            footer={<Footer />}
        />
    )
}

export { PageArticleId }
