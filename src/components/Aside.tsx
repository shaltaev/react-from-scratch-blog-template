import React, {useContext, FC } from "react";
import {Context as ContextAuth} from "~/store/auth";
import {Link} from "react-router-dom";

type ContextTypeAuth = import('~/store/auth').ContextType

const Aside: FC = () => {
    const { state: stateAuth, dispatch: dispatchAuth } = useContext<ContextTypeAuth>(ContextAuth)

    const items = [
        <Link to={`/article`} key="articles">
            Home
        </Link>,
    ]

    const handleLogout = () => {
        dispatchAuth({ type: 'LOGOUT' })
    }

    if (stateAuth.token) {
        items.push(<Link to={`/article/new`} key="articlesNew">
            New article
        </Link>)
        items.push(<Link to={`/profile`} key="profile">
            Profile
        </Link>)
        items.push(<button onClick={handleLogout} key="logout">LOGOUT</button>)
    } else {
        items.push(<Link to={`/login`} key="login">
            Login
        </Link>)
    }

    return <>{items}</>
}

export { Aside }
