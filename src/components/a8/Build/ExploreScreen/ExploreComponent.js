import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">

                <div className="col-10">
                    <div className="form-group has-search">
                        <span className="fa fa-search wd-search-icon"></span>
                        <input type="text" className="form-control border rounded-pill"
                               placeholder="Search Twitter"/>
                    </div>
                </div>

                <div className="col-2 text-end">
                    <a href="explore-settings.html">
                        <i className="fas fa-cog fa-2x position-relative ms-4 mt-1"></i>
                    </a>
                </div>
           </div>

            <div className="row mt-2 mb-2">
                <div className="col-12">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="for-you.html">For
                                you</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               href="trending.html">Trending</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                               href="news.html">News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="sports.html">Sports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="entertainment.html"><span className="d-none d-sm-block d-sm-none d-md-block">Entertainment</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            


            <div className="row mt-2">
                <div className="col-12">
                    <div className="wd-thumbnail">
                        <img src="/images/starship.jpg" className="img-fluid position-relative"/>
                        <div className="wd-caption">
                            <p>SpaceX's Starship</p>
                        </div>
                    </div>
                </div>
            </div>
           

           <div className="mt-2">
               {/*{PostSummaryList()}*/}
               <PostSummaryList/>
           </div>
        </>
    )
}
export default ExploreComponent;
