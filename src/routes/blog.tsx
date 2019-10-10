import React, { FC } from 'react'

import { LayoutDefault } from '../layouts/default'
import { Footer } from '../components/footer'
import { Header } from '../components/header'

import { Button } from '../components/button'

const PageBlog: FC = () => {
    return (
        <LayoutDefault
            header={<Header />}
            content={'Blog'}
            aside={
                <Button
                    onClick={(): void => {
                        alert('Aside')
                    }}
                    kind="outlined"
                >
                    Aside
                </Button>
            }
            footer={<Footer />}
        />
    )
}

export { PageBlog }
