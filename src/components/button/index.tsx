import React, { FC } from 'react'
import styles from './style.css'

const Button: FC<Props> = props => {
    const { onClick, children, ...rest } = props
    console.log(styles.btn)
    return (
        <button onClick={onClick} {...rest} className={`${styles.btn}`}>
            {children}
        </button>
    )
}

export { Button }
