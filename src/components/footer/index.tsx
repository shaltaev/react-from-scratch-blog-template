import React, { FC } from 'react'
import styles from './style.css'

const Footer: FC<PropsFooter> = props => {
    const { children } = props
    return (
        <div className={styles.footer}>
            {'@ 2020, shaltaev'}
            {children}
        </div>
    )
}

export { Footer }
