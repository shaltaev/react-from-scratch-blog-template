import React, { FC } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import './assets/styles/global.css'

import { Provider as ProviderArticles } from './store/articles'
import { Provider as ProviderAuth } from './store/auth'

import { PageNews } from './pages/news'
import { PageArticleNew } from './pages/article/new'
import { PageArticleId } from './pages/article/_id'
import { PageLogin } from './pages/login'
import { PageProfile } from './pages/profile'

import { PrivateRoute } from "~/middleware/PrivateRoute";

const App: FC = () => {
    return (
        <ProviderAuth>
        <ProviderArticles>
            <Router>
                <Switch>
                    <Route path="/news" component={PageNews} />
                    <Route path="/login" component={PageLogin} />
                    <PrivateRoute path="/profile" component={PageProfile} />
                    <Route path="/articles/new" component={PageArticleNew} />
                    <Route path="/articles/:id" component={PageArticleId} />
                    <Redirect to="/news" />
                </Switch>
            </Router>
        </ProviderArticles>
        </ProviderAuth>
    )
}

export { App }
