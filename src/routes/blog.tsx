import React, { FC, useContext } from 'react'

import { Link } from 'react-router-dom'

import { PostsContext } from '../store/posts'

import { LayoutDefault } from '../layouts/default'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

type PostContextType = import('../store/posts').Context

const PageBlogContent: FC = () => {
    const { state } = useContext<PostContextType>(PostsContext)
    if (state.posts.length > 0) {
        return (
            <>
                {state.posts.map((post, index) => {
                    return (
                        <li key={post.time}>
                            <Link to={`post/${index}`}>{post.title}</Link>
                        </li>
                    )
                })}
            </>
        )
    } else {
        return <li>No Content yet</li>
    }
}

const PageBlog: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PageBlogContent />
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

export { PageBlog }
