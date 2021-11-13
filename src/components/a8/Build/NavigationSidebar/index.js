import React from "react";
import bars from "./bars.json";
import BarItem from "./BarItem";
import {Link} from "react-router-dom";



const NavigationSidebar = (
    {
        active = 'Explore'
    }) =>{

    return (
        <>
            <div className="list-group">
                <Link to="/a8"
                      className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>

                
                {
                    bars.map(bar => {
                        return (<BarItem bar={bar} active={active}/>);
                    })
                }


                <Link to="/a8/twitter/more"
                   className={`list-group-item list-group-item-action d-inline-flex ${active === 'More' ? 'active' : ''}`}>
                    <span className="fa-stack wd-more-icon mt-1">
                        <i className="fas fa-circle fa-stack-2x"></i>
                        <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    </span>
                    <span className="d-none d-xl-block d-xxl-block ms-1">More</span>
                </Link>
            </div>
            
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;

