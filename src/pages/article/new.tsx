import React, { FC, useContext } from 'react'

import { Context } from '~/store/articles'
type PostContextType = import('~/store/articles').ContextType

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'

import { Link } from 'react-router-dom'

import { Button } from '~/components/button'

const PageArticleNewContent: FC = () => {
    const { dispatch } = useContext<PostContextType>(Context)

    const handleClick = (): void => {
        dispatch({
            type: 'ADD_NEW_ARTICLE',
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

const PageArticleNew: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={
                <ul>
                    <PageArticleNewContent />
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

export { PageArticleNew }
