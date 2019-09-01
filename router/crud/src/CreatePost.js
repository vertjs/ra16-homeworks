import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

 function CreatePost({history, match}) {
    console.log(history)
    console.log(match.params.new)
    return (
        <h1 {...() => {
            history.push(`/posts/${match.params.new}`)
            console.log(history)
            }
        }>
            Hi!
        </h1>
    )
}

export default withRouter(CreatePost)