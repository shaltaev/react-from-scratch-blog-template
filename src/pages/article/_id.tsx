import React, { FC, useContext } from 'react'

import { useParams } from 'react-router-dom'
import { Context } from '~/store/articles'

type PostContextType = import('~/store/articles').ContextType

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Aside } from "~/components/Aside"

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
            aside={<Aside />}
            footer={<Footer />}
        />
    )
}

export { PageArticleId }
