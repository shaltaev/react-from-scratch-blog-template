import React, { useReducer } from 'react'

interface BlockHeader {
    type: 'header'
    data: {
        text: string
        level: 1 | 2 | 3 | 4 | 5 | 6
    }
}

interface BlockParagraph {
    type: 'paragraph'
    data: {
        text: string
    }
}

interface BlockList {
    type: 'list'
    data: {
        style: string
        items: string
    }
}

type Block = BlockHeader | BlockParagraph | BlockList

interface Post {
    time: number
    title: string
    blocks: Block[]
    version: string
}

interface State {
    posts: Post[]
}

const ADD_NEW_POST = 'ADD_NEW_POST'

interface ActionAddNewPost {
    type: typeof ADD_NEW_POST
    payload: Post
}

type Actions = ActionAddNewPost

const reducer: import('react').Reducer<State, Actions> = (
    prevState: State,
    action: Actions,
): State => {
    switch (action.type) {
        case ADD_NEW_POST:
            return {
                ...prevState,
                posts: [...prevState.posts, action.payload],
            }
        default:
            return prevState
    }
}

export interface Context {
    state: State
    dispatch: import('react').Dispatch<Actions>
}

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
const PostsContext = React.createContext<Context | any>(null)

interface Props {
    children: import('react').ReactNode
}

const initialState: State = { posts: [] }

const PostsProvider: import('react').FC<Props> = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <PostsContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PostsContext.Provider>
    )
}

export { PostsProvider, PostsContext }
