import React, { useReducer } from 'react'

interface State {
    token: string | undefined
}

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

interface ActionLogin {
    type: typeof LOGIN
    token: string
}

interface ActionLogout {
    type: typeof LOGOUT
}

type Actions = ActionLogin | ActionLogout

const reducer: import('react').Reducer<State, Actions> = (
    prevState: State,
    action: Actions,
): State => {
    switch (action.type) {
        case LOGIN:
            if (window) {
                window.localStorage.setItem('token', action.token)
            }
            return {
                ...prevState,
                token: action.token,
            }
        case "LOGOUT":
            return {
                ...prevState,
                token: undefined
            }
        default:
            return prevState
    }
}

export interface ContextType {
    state: State
    dispatch: import('react').Dispatch<Actions>
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const Context = React.createContext<ContextType | any>(null)

interface Props {
    children: import('react').ReactNode
}

const getInitialState = (): State => {
    if (window)
    {
        return {
            token: window.localStorage.getItem('token') || undefined
        }
    }

    return { token: undefined }
}

const Provider: import('react').FC<Props> = props => {
    const [state, dispatch] = useReducer(reducer, getInitialState())

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export { Provider, Context }
