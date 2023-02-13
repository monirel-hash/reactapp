import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

import thunkMiddleware from "redux-thunk"
import { setUsers } from "./actions";

import { reducer } from "./reducer";

// alias


// ASYNC 
export const getAsyncUsers = () => {
    return async (dispatch) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/")
        const data = await res.json()

        console.log("DATA -> ", data)

        dispatch(setUsers(data));
    }
}



const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
    );


export default store;