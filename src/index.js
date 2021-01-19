import ReactDOM from "react-dom";
import React from "react";
import { reducer } from "./reducers/reducer.js";
import { ActionCreator, Operations } from "./reducers/operations.js";
import { Provider } from "react-redux";
import { App } from "../src/components/app/app.jsx";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { compose } from "recompose";
import createApi from "./api.js";

const api = createApi((...args) => store.dispatch(...args));
export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ?
        window.__REDUX_DEVTOOLS_EXTENSION__() :
        (f) => f
    )
);

store.dispatch(Operations.init());
const init = () => {
    ReactDOM.render( <
        Provider store = { store } >
        <
        App / >
        <
        /Provider>,

        document.querySelector(`#root`)
    );
};

init();

// export const group=(pictures)=>{
//     const tagArr=(pictures ).map((it)=>{
//     return it.tag
//     })
//     const newArray = tagArr.filter((it, i)=> {
//         return tagArr.indexOf(it) == i;
//     });
//     return newArray
//     }