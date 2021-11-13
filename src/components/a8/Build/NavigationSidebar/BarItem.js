import {Link} from "react-router-dom";


const BarItem = ({bar, active}) =>
                  //     bar = {
                  //         link: '../../build/ExploreScreen/index.html',
                  //         icon:'fas fa-hashtag mt-1',
                  //         text: 'Explore',
                  //         default_active: true
                  //     }
                  // }) => {
{
    return(

        // <a href={bar.link}
        //    className={`list-group-item list-group-item-action ${active === bar.text ? 'active' : ''} d-inline-flex`}>
        //     <i className={bar.icon}></i>
        //     <span className="d-none d-xl-block d-xxl-block ms-1">{bar.text}</span>
        // </a>

    <Link to={bar.router}
       className={`list-group-item list-group-item-action ${active === bar.text ? 'active' : ''} d-inline-flex`}>
        <i className={bar.icon}></i>
        <span className="d-none d-xl-block d-xxl-block ms-1">{bar.text}</span>
    </Link>


    );
}

export default BarItem;