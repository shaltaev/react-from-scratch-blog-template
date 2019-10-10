import React, { FC } from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import './assets/styles/global.css'

import { PostsProvider } from './store/posts'
import { PageBlog } from './routes/blog'
import { PagePostNew } from './routes/post/new'
import { PagePostRead } from './routes/post/read'

const App: FC = () => {
    return (
        <PostsProvider>
            <Router>
                <Switch>
                    <Route path="/blog" component={PageBlog} />
                    <Route path="/post/new" component={PagePostNew} />
                    <Route path="/post/:postID" component={PagePostRead} />
                    <Redirect to="/blog" />
                </Switch>
            </Router>
        </PostsProvider>
    )
}

export { App }
