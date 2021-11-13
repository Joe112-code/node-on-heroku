import React from "react";
// import who from "./who.json";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const selectAllWho = (state) => state.who;

const WhoToFollowList = () => {
    // retrieve state from store
    //const who = useSelector((state) => state.who);

   const who = useSelector(selectAllWho);

    return (
        <ul className="list-group">
            <li className="list-group-item wd-black-topic-font">
                Who to follow
            </li>
            {who.map(who => {
                return (
                    <WhoToFollowListItem who={who}/>
                );
            })
            }
        </ul>
    )
}
export default WhoToFollowList;