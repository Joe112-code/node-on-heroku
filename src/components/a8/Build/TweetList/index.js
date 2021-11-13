import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TweetListItem from "./TweetListItem";
import {fetchAllTweets} from "../../../../services/tweetService";


// get the tweets from the state in the store
const selectAllTweets = (state) => state.tweets;

const TweetList = () => {
    // use useSelector to retrieve the tweets
    const tweets = useSelector(selectAllTweets);

    const dispatch = useDispatch();
    useEffect(() => fetchAllTweets(dispatch), []);


    return(

        <ul className="list-group">

            {
                tweets.map(tweet =>
                               <TweetListItem tweet={tweet} />
                )
            }

        </ul>
    );
};

export default TweetList;





