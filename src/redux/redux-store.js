import reducers from "./redux-index";
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from "redux-thunk";


/*export default (initialState) => {
    const store = createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
    return store;
}*/

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;