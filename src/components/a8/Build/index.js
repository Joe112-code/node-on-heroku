import React from "react";
import {Route} from "react-router-dom";

import "./explore.css"

import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen";
import who from "../reducers/who";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import tweets from "../reducers/tweets";
import posts from "../reducers/posts";
import ProfileScreen from "./ProfileScreen";
import profile from "../reducers/profile";

const reducers = combineReducers({who, tweets, posts, profile})
// create the store from the reducer
const store =createStore(reducers);


const Build = () => {

    return(
        // provide the store to all child components
        <Provider store={store}>
        <div>
            <Route path={["/", "/a8/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a8/twitter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path="/a8/twitter/profile"
                   exact={true} component={ProfileScreen}/>
        </div>
        </Provider>

);
};

export default Build;
