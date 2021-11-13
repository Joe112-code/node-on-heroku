import React from "react";


const ProfileItem = ({profile, setEditProfile}) => {

    const birth_date=new Date(profile.dateOfBirth);

    // alternative way to render birth date by string
    const birth_date1=profile.dateOfBirth;

    let valid_bod="";
    const strArray=["January","February","March","April","May","June","July",
                    "August","September","October","November","December"];
    if (birth_date1.includes("/")){
        const mm_idx=parseInt(birth_date1.split('/')[0])-1;
        valid_bod=strArray[mm_idx]+ " " +birth_date1.split('/')[1]+", "+birth_date1.split('/')[2]
    }
    else{
        const mm_idx=parseInt(birth_date1.split('-')[1])-1;
        valid_bod=strArray[mm_idx]+ " " +birth_date1.split('-')[2]+", "+birth_date1.split('-')[0]
    }

    const join_date=new Date(profile.dateJoined.split('/')[1], profile.dateJoined.split('/')[0]-1);
    const join_mm_idx=parseInt(profile.dateJoined.split('/')[0])-1;
    const join_date1=strArray[join_mm_idx]+" "+profile.dateJoined.split('/')[1];


    return (
        <>
            <div className="row">
                <div className="col-1">
                    <a href="#">
                        <i className="fas fa-arrow-left wd-inactive ms-3"></i>
                    </a>
                </div>
                <div className="col-11">
                    {/*<span className="wd-name-font ms-3">{profile.firstName} {profile.lastName}</span>*/}
                    <span className="wd-name-font ms-3">{profile.fullName}</span>
                    <h6 className="wd-gray-tweet-font ms-3">5,196 Tweets</h6>
                </div>
            </div>

            <div>
                <img src={profile.bannerPicture} className="wd-banner"></img>
                <img src={profile.profilePicture} className="wd-profile-avatar ms-2 wd-avatar-camera"></img>
                <span>
                    <button onClick={()=>setEditProfile(true)} className="fa-pull-right rounded-pill mt-2 me-3 wd-btn">Edit profile</button>
                </span>

            </div>

            <div className="wd-mt ms-1">
                {/*<h5 className="wd-name-font">{profile.firstName} {profile.lastName}</h5>*/}
                <h5 className="wd-name-font">{profile.fullName}</h5>
                <h6 className="wd-gray-tweet-font wd-handle-mt">@{profile.handle}</h6>
                <p className="wd-bio-font">{profile.bio}</p>
            </div>

            <div className="row wd-icon-mt">
                <span className="mt-1">
                    <i className="fas fa-map-marker-alt fa-xs ms-2"></i>
                    <span className="wd-icon-text-font ms-1">{profile.location}</span>


                    <i className="fas fa-ankh fa-xs ms-3"></i>
                    {/*<span className="wd-icon-text-font ms-1">{"Born " + birth_date.toLocaleDateString("en-US", { month: 'short' })*/}
                    {/*                                          + " " +*/}
                    {/*                                          birth_date.toLocaleDateString("en-US", { day: 'numeric' })+", "+*/}
                    {/*                                          birth_date.toLocaleDateString("en-US", { year: 'numeric' })*/}

                    {/*}*/}
                    {/*</span>*/}
                    <span className="wd-icon-text-font ms-1">
                        {"Born " + valid_bod}
                    </span>

                    <i className="far fa-calendar-alt fa-xs ms-3"></i>
                    {/*<span className="wd-icon-text-font ms-1">{"Joined " + join_date.toLocaleDateString("en-US", { month: 'short' })*/}
                    {/*                                          + " " + join_date.toLocaleDateString("en-US", { year: 'numeric' })*/}
                    {/*}*/}
                    {/*</span>*/}
                    <span className="wd-icon-text-font ms-1">
                        {"Joined " + join_date1}
                    </span>
                </span>
                <p className="ms-1 mt-2">
                    <span className="wd-follow-font">{profile.followingCount}</span><span className="ms-1 wd-icon-text-font me-3">Following</span>
                    <span className="wd-follow-font">{profile.followersCount}</span><span className="ms-1 wd-icon-text-font">Followers</span>
                </p>

            </div>



        </>
    );

}


export default ProfileItem;