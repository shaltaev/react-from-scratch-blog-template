import React, { FC, useContext } from 'react'

import { useParams, Link } from 'react-router-dom'
import { PostsContext } from '../../store/posts'

type PostContextType = import('../../store/posts').Context

import { LayoutDefault } from '../../layouts/default'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

const PagePostReadContent: FC = () => {
    const { postID } = useParams()
    const { state } = useContext<PostContextType>(PostsContext)

    const postIDAsNumOrUndef = postID ? parseInt(postID) : undefined

    if (
        postIDAsNumOrUndef !== undefined &&
        `${postIDAsNumOrUndef}` === postID &&
        state.posts.length - 1 >= postIDAsNumOrUndef &&
        postIDAsNumOrUndef >= 0
    ) {
        return <>{JSON.stringify(state.posts[postIDAsNumOrUndef])}</>
    } else {
        return <>Exact post not exist</>
    }
}

const PagePostRead: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PagePostReadContent />
                </ul>
            }
            aside={[
                <Link to={`/post/new`} key="1">
                    New post
                </Link>,
                <Link to={`/post`} key="2">
                    Home
                </Link>,
            ]}
            footer={<Footer />}
        />
    )
}

export { PagePostRead }
