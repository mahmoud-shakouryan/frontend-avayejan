import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { userSigninReducer, userSignupReducer } from "./store/reducers/userReducers";
import { videoDetailsReducer, videoListReducer } from "./store/reducers/videoReducers";
import { cardReducer } from "./store/reducers/cardReducers";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({ 
  userSigninReducer: userSigninReducer,
  userSignupReducer: userSignupReducer,
  videoListReducer: videoListReducer,
  videoDetailsReducer: videoDetailsReducer,
  cardReducer: cardReducer,
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
