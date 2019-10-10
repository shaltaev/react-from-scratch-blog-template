import React, { FC } from 'react'

const Button: FC<Props> = props => {
    const { onClick, children, ...rest } = props
    return (
        <button onClick={onClick} {...rest}>
            {children}
        </button>
    )
}

export { Button }
