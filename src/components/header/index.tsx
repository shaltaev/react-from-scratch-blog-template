import React, { FC, useState, useEffect } from 'react'
import styles from './style.css'

import { Button } from '../button'

interface PropsHeader {
    children?: import('react').ReactNode
}


const Header: FC<PropsHeader> = props => {
    const [theme, setTheme] = useState<boolean>(false) // false - light, true - dark

    useEffect(() => {
        document.body.setAttribute('theme', theme ? 'dark' : 'light')
    }, [theme])

    const { children } = props
    return (
        <div className={styles.header}>
            <h4 className={styles.title}>Blog</h4>
            <Button
                onClick={(): void => {
                    setTheme(cs => !cs)
                }}
            >
                {theme ? 'dark to light' : 'light to dark'}
            </Button>
            {children}
        </div>
    )
}

export { Header }
