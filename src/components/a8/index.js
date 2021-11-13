import React from 'react';
import {combineReducers, createStore} from "redux";
import tweets from "./reducers/tweets";
import who from "./reducers/who";
import posts from "./reducers/posts";
import profile from "./reducers/profile";
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A8=() => {
    const reducer = combineReducers({tweets: tweets, who, posts, profile})
    const store = createStore(reducer);
    return (
        <Provider store={store}>

            <BrowserRouter>

                <div className="container">

                    <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
                        <Practice/>
                    </Route>


                    <Route path="/a8/twitter">
                        <Build/>
                    </Route>

                </div>
            </BrowserRouter>
        </Provider>
    )

}

export default A8;