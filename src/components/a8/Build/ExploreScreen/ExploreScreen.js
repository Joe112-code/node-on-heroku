import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList";


const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-md-2 col-sm-2 col-xxl-2 col-xl-2 col-xs-1">
                <NavigationSidebar active="Explore"/>
            </div>
            <div className="col-6 col-lg-7 col-md-10 col-sm-10 col-xxl-6 col-xl-6 col-xs-11"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="col-4 col-lg-4 col-md-0 col-sm-0 col-xxl-4 col-xl-4 d-none d-lg-block d-xl-block d-xxl-block col-xs-0">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;



