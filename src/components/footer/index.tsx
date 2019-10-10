import React, { FC } from 'react'
import styles from './style.css'

const Footer: FC<PropsFooter> = props => {
    const { children } = props
    return (
        <div className={styles.footer}>
            {'@ 2019, shaltaev'}
            {children}
        </div>
    )
}

export { Footer }
