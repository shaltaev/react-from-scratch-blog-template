import React, { FC } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import './assets/styles/global.css'

import { Provider as ProviderArticles } from './store/articles'
import { PageNews } from './pages/news'
import { PageArticleNew } from './pages/article/new'
import { PageArticleId } from './pages/article/_id'

const App: FC = () => {
    return (
        <ProviderArticles>
            <Router>
                <Switch>
                    <Route path="/news" component={PageNews} />
                    <Route path="/articles/new" component={PageArticleNew} />
                    <Route path="/articles/:id" component={PageArticleId} />
                    <Redirect to="/news" />
                </Switch>
            </Router>
        </ProviderArticles>
    )
}

export { App }
