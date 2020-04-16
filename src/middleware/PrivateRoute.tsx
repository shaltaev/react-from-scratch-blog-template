import React, {FC, useContext} from "react";
import {Redirect, Route} from "react-router";

import {Context as ContextAuth} from "~/store/auth";

type ElementType = import('react').ElementType<any>

type ContextTypeAuth = import('~/store/auth').ContextType

const PrivateRoute: FC<{component: ElementType; [K: string]: any }> = ({ component: Component, ...rest }) => {
    const { state: stateAuth } = useContext<ContextTypeAuth>(ContextAuth)

    const renderF = (...props: any[]) =>
        stateAuth.token ? <Component {...props} /> : <Redirect to='/' />


    return <Route {...rest} render={renderF} />
}

export { PrivateRoute }
