interface PropsButton {
    children: import('react').ReactNode
    onClick: (e: import('react').MouseEvent) => void
    kind?: 'default' | 'outlined'
    className?: string
}
