import React, { FC, useContext } from 'react'

import { PostsContext } from '../../store/posts'
type PostContextType = import('../../store/posts').Context

import { LayoutDefault } from '../../layouts/default'
import { Footer } from '../../components/footer'
import { Header } from '../../components/header'

import { Link } from 'react-router-dom'

import { Button } from '../../components/button'

const PagePostNewContent: FC = () => {
    const { dispatch } = useContext<PostContextType>(PostsContext)

    const handleClick = (): void => {
        dispatch({
            type: 'ADD_NEW_POST',
            payload: {
                time: Date.now(),
                title: `${Date.now()}`,
                blocks: [],
                version: '0',
            },
        })
    }

    return <Button onClick={handleClick}>Mock Editor</Button>
}

const PagePostNew: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PagePostNewContent />
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

export { PagePostNew }
