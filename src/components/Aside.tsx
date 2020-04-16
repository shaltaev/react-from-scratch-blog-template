import React, {useContext, FC } from "react";
import {Context as ContextAuth} from "~/store/auth";
import {Link} from "react-router-dom";
import {Button} from "~/components/button";

type ContextTypeAuth = import('~/store/auth').ContextType

const Aside: FC = () => {
    const { state: stateAuth, dispatch: dispatchAuth } = useContext<ContextTypeAuth>(ContextAuth)

    const items = [
        <Link to={`/articles/new`} key="articlesNew">
            New article
        </Link>,
        <Link to={`/articles`} key="articles">
            Home
        </Link>,
    ]

    const handleLogout = () => {
        dispatchAuth({ type: 'LOGOUT' })
    }

    if (stateAuth.token) {
        items.push(<Button kind='outlined' onClick={handleLogout} key="logout">LOGOUT</Button>)
        items.push(<Link to={`/profile`} key="profile">
            Profile
        </Link>)
    } else {
        items.push(<Link to={`/login`} key="login">
            Login
        </Link>)
    }

    return <>{items}</>
}

export { Aside }
