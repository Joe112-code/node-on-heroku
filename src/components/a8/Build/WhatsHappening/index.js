import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import "./styles.css";
import {postNewTweet, fetchAllTweets} from "../../../../services/tweetService";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const createTweetClickHandler = () => {
        // dispatch({type: 'create-tweet',
        //                  tweet: whatsHappening
        //          });

        postNewTweet(dispatch,
                     {tweet: whatsHappening}
        );
        console.log( whatsHappening)
    }


    return(
        <>
            <table className="wd-mb">
                <tr>
                    <td className="wd-vertical-align">
                        <img src={'/images/elon_musk.png'}
                             className="rounded-circle wd-avatar"/>
                    </td>
                    <td className="wd-width">
                        <textarea value={whatsHappening}
                                  onChange={(event) => setWhatsHappening(event.target.value)}
                                  className="form-control wd-create-tweet-bar"
                                  placeholder="What's happening?"></textarea>
                        <hr/>
                        <span>
                            <a href="#"><i className="far fa-image me-3"></i></a>
                            <a href="#"><i className="far fa-chart-bar me-3"></i></a>
                            <a href="#"><i className="far fa-smile me-3"></i></a>
                            <a href="#"><i className="far fa-calendar me-3"></i></a>
                        </span>
                        <button onClick={createTweetClickHandler} className="btn btn-primary fa-pull-right rounded-pill">
                            Tweet
                        </button>
                    </td>
                </tr>

            </table>



        </>
    );
}

export default WhatsHappening;
