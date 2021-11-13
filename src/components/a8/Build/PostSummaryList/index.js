import React from "react";
import PostSummaryItem from "./PostSummaryItem";
import {useSelector} from "react-redux";
//import posts from "./posts.json";

const selectAllPosts = (state) => state.posts;

const PostSummaryList = ({title}) => {
    const posts = useSelector(selectAllPosts);
    return(

        <ul className="list-group">
            {
                title &&
                <li className="list-group-item">
                    <h5 className="fw-bolder">{title}</h5>
                </li>
            }

            {
                posts.map((post, idx) => {
                    return (
                        <PostSummaryItem key={idx} post={post}/>
                    );
                })
            }
        </ul>

    );




}
export default PostSummaryList;

// const PostSummaryList = () => {
//     return (
//         <ul className="list-group">
//
//             {
//                 posts.map(post => {
//                     return (
//                         <PostSummaryItem post={post}/>
//                     );
//                 })
//             }
//         </ul>
//     )
// }
// export default PostSummaryList;