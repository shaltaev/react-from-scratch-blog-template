import React, { FC } from 'react'
import styles from './style.css'

const LayoutDefault: FC<PropsLayoutDefault> = props => {
    const { header, footer, content, aside } = props

    return (
        <section className={styles.layout}>
            <header className={styles.header}>{header}</header>
            <main className={styles.content}>{content}</main>
            <aside className={styles.aside}>{aside}</aside>
            <footer className={styles.footer}>{footer}</footer>
        </section>
    )
}

export { LayoutDefault }
