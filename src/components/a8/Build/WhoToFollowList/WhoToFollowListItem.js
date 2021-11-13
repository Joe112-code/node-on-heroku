const WhoToFollowListItem = ({who}) =>
    // (
    // {
    //     who = {
    //         avatarIcon: '../images/nasa.jpg',
    //         userName: 'NASA',
    //         handle: 'NASA',
    //     }
    // }
    // )
    {

    return(
        <li className="list-group-item">
                <div className="row">
                    <div className="col-2 text-center">
                        <img src={who.avatarIcon} width="48" className="rounded-circle float-start"/>
                        
                    </div>
                    <div className="col-6">
                        <h6 className="wd-black-topic-font">{who.userName}
                            <i className="fas fa-check-circle ms-1"></i>
                        </h6>
                        <h6 className="wd-black-content-font">@{who.handle}</h6>
                    </div>
                    <div className="col-4 text-center">
                        <button className="btn btn-primary rounded-pill mt-1">Follow</button>
                    </div>
                </div>
        </li>);

}
export default WhoToFollowListItem;