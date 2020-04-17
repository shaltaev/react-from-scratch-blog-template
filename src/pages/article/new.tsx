import React, { FC, useContext } from 'react'

import { Context } from '~/store/articles'
type PostContextType = import('~/store/articles').ContextType

import { LayoutDefault } from '~/layouts/default'
import { Footer } from '~/components/footer'
import { Header } from '~/components/header'
import { Aside} from "~/components/Aside";

import { Button } from '~/components/button'

const PageArticleNewContent: FC = () => {
    const { dispatch } = useContext<PostContextType>(Context)

    const handleClick = (): void => {
        dispatch({
            type: 'ADD_NEW_ARTICLE',
            payload: {
                time: Date.now(),
                title: `Title ${Math.round(Date.now() / 1000) % 100000}`,
                blocks: [{
                    type: 'header',
                    data: {
                        text: 'Title Block',
                        level: 3
                    }
                }],
                version: '0.0.1',
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
            aside={<Aside />}
            footer={<Footer />}
        />
    )
}

export { PageArticleNew }
