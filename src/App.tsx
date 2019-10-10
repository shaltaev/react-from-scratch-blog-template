import React, { FC } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import './assets/styles/global.css'

import { PageBlog } from './routes/blog'
import { PagePost } from './routes/post'

const App: FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/blog" component={PageBlog} />
                <Route path="/post" component={PagePost} />
                <Redirect to="/blog" />
            </Switch>
        </Router>
    )
}

export { App }
