import React, { FC } from 'react'
import styles from './style.css'

interface PropsButton {
    children: import('react').ReactNode
    onClick: (e: import('react').MouseEvent) => void
    kind?: 'default' | 'outlined'
    className?: string
}

const Button: FC<PropsButton> = ({
    onClick,
    children,
    kind = 'default',
    className = '',
    ...rest
}) => {
    const resultStyles = `${className !== '' ? `${className} ` : ''}
        ${styles.btn} ${
        kind !== 'default' ? styles.btnOutlined : styles.btnDefault
    }`

    return (
        <button onClick={onClick} {...rest} className={resultStyles}>
            {children}
        </button>
    )
}

export { Button }
