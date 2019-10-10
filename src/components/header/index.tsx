import React, { FC, useState } from 'react'
import styles from './style.css'

import { Button } from '../button'

const Header: FC<PropsHeader> = props => {
    const [theme, setTheme] = useState<boolean>(false)

    const { children } = props
    return (
        <div className={styles.header}>
            <h4 className={styles.title}>Blog</h4>
            <Button
                onClick={(): void => {
                    setTheme(cs => !cs)
                }}
            >
                {theme ? 'dark to ligth' : 'ligth to dark'}
            </Button>
            {children}
        </div>
    )
}

export { Header }
