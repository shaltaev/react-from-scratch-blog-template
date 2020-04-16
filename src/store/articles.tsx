import React, { useReducer } from 'react'

type Article = import('~/models/article').Article

interface State {
    articles: Article[]
}

const ADD_NEW_ARTICLE = 'ADD_NEW_ARTICLE'

interface ActionAddNewArticle {
    type: typeof ADD_NEW_ARTICLE
    payload: Article
}

type Actions = ActionAddNewArticle

const reducer: import('react').Reducer<State, Actions> = (
    prevState: State,
    action: Actions,
): State => {
    switch (action.type) {
        case ADD_NEW_ARTICLE:
            return {
                ...prevState,
                articles: [...prevState.articles, action.payload],
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

const initialState: State = { articles: [] }

const Provider: import('react').FC<Props> = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <Context.Provider value={{ state, dispatch }}>
            {props.children}
        </Context.Provider>
    )
}

export { Provider, Context }
