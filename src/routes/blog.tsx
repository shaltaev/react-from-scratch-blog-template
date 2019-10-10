import React, { FC } from 'react'

import { Button } from '../components/button'

const PageBlog: FC = () => {
    return (
        <>
            Blog
            <Button onClick={(): void => alert('Hello')}>Hello</Button>
        </>
    )
}

export { PageBlog }
