import React from "react";

const PostSummaryItem = ({post}) => {
    return (
        <li className="list-group-item">
                <div className="row">
                    <div className="col-9 col-xl-7 col-lg-7">
                        <h6 className="wd-gray-title-font">{post.topic}</h6>
                        <h6 className="wd-black-topic-font wd-top1">{post.userName}
                            <i className="fas fa-check-circle ms-1"></i>
                            <span className="wd-gray-title-font ms-1"> - {post.time}</span>
                        </h6>
                        <a className="wd-inactive" href="#">
                          <p className="wd-black-topic-font wd-top2">{post.title}
                          </p>
                        </a>
                    </div>
                    <div className="col-3 text-end col-xl-5 col-lg-5">
                        <img src={post.image} className="wd-logo mt-1"/>
                    </div>
                </div>

        </li>
    );

}
export default PostSummaryItem;

// import React from "react";
//
// const PostSummaryItem = (
//     {
//         post = {
//             "topic": "Web Development",
//             "userName": "ReactJS",
//             "time": "2h",
//             "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
//             "image": "/images/react-blue.png"
//         }
//     }) => {
//     return(
//         <li className="list-group-item">
//             <div className="row">
//                 <div className="col-9 col-md-10">
//                     <div className="text-muted">{post.topic}</div>
//                     <div>
//                         <span className="fw-bold">
//                             {post.userName}
//                             <i className="fas fa-check-circle"></i>
//                             {/*<span className="fa-stack" style={{"fontSize": "0.5em"}}>*/}
//
//                               {/*<i className="fas fa-circle fa-stack-2x"></i>*/}
//                               {/*<i className="fas fa-check fa-stack-1x fa-inverse"></i>*/}
//                             {/*</span>*/}
//                         </span>
//                         <span className="text-muted">
//                             - {post.time}
//                         </span>
//                     </div>
//                     <div className="fw-bold">{post.title}</div>
//                 </div>
//                 <div className="col-3 col-md-2">
//                     <img src={post.image}
//                          alt="qwe"
//                          width="85"
//                          height="85"
//                          className="float-end"
//                          style={{"borderRadius" : "10px"}}/>
//                 </div>
//             </div>
//         </li>
//     );
// }
//
// export default PostSummaryItem;




