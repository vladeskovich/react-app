import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state"

export let renderEntireTree = () => {
    ReactDOM.render(
        <App state={state} addPost={addPost}  updateNewPostText={updateNewPostText}/>, document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);
serviceWorker.unregister();
