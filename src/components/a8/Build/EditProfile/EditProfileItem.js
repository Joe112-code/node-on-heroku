import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {updateCurrentProfile} from "../../../../services/profileService";


const EditProfileItem = ({profile, setEditProfile}) =>{
    const [localProfile, setLocalProfile] = useState({});
    useEffect(() => {
        setLocalProfile(profile);
    }, []);
    const dispatch = useDispatch();
    const updateProfileClickHandler = () => {
        // const action = {
        //     type: 'update-profile',
        //     profile: localProfile
        // };
        // dispatch(action);
        updateCurrentProfile(dispatch, localProfile);

    }

    const birth_date=new Date(profile.dateOfBirth);


    const birth_date_form = profile.dateOfBirth.split('/')[2]
                          +"-"+profile.dateOfBirth.split('/')[0]
                          +"-"+profile.dateOfBirth.split('/')[1];





    return (
        <>
            <div className="row">
                <div className="col-1">
                    <a href="#">
                        <i onClick={()=>setEditProfile(false)} className="fas fa-times wd-white ms-3 mb-2 "></i>
                    </a>

                </div>
                <div className="col-8">
                    <span className="wd-name-font ms-3 ">Edit Profile</span>
                </div>
                <div className="col-3">
                    <button onClick={(event) => updateProfileClickHandler(event.target.value)}
                            className="fa-pull-right rounded-pill me-3 wd-save-btn">Save</button>
                </div>
            </div>

            <div className="wd-parent">
                <img src={profile.bannerPicture} className="wd-banner mt-2 wd-darken1"></img>
                <a href="#"><i className="fas fa-camera wd-banner-camera"></i></a>

                <i className="fas fa-times wd-remove"></i>
                <img src={profile.profilePicture} className="wd-profile-avatar ms-2 wd-darken2"></img>
                <a href="#"><i className="fas fa-camera wd-avatar-camera"></i></a>


            </div>

            {/*alternative way to parse name*/}

            {/*<div className="form-floating wd-neg-mt mb-3">*/}
            {/*    <input type="text"*/}
            {/*           onChange={(event) => {*/}
            {/*               setLocalProfile({...localProfile, firstName: event.target.value.split()[0],*/}
            {/*                                   lastName: event.target.value.split()[1]})//.split()[0],lastName: event.target.value.split()[1]*/}
            {/*           }}*/}
            {/*           className="form-control wd-each-bar-style" id="floatingInputValue1"*/}
            {/*            defaultValue={profile.firstName +" "+ profile.lastName}/>*/}
            {/*            <label htmlFor="floatingInputValue1">Name</label>*/}
            {/*</div>*/}

            <div className="form-floating wd-neg-mt mb-3">
                <input type="text"
                       onChange={(event) => {
                           setLocalProfile({...localProfile, fullName: event.target.value})
                       }}
                       className="form-control wd-each-bar-style" id="floatingInputValue1"
                       defaultValue={profile.fullName}/>
                <label htmlFor="floatingInputValue1">Name</label>
            </div>

            <div className="form-floating mb-3">
                <textarea
                    onChange={(event)=>{
                        setLocalProfile({...localProfile, bio:event.target.value})
                    }}
                    className="form-control wd-bar-height2 wd-each-bar-style wd-hide-corner" id="floatingInputValue2"
                          defaultValue={profile.bio}></textarea>
                <label htmlFor="floatingInputValue2">Bio</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text"
                       onChange={(event)=>{
                           setLocalProfile({...localProfile, location:event.target.value})
                       }}
                       className="form-control wd-each-bar-style" id="floatingInputValue3"
                          defaultValue={profile.location}/>
                <label htmlFor="floatingInputValue3">Location</label>
            </div>

            <div className="form-floating mb-3">
                <input type="text"
                       onChange={(event)=>{
                           setLocalProfile({...localProfile, website:event.target.value})
                       }}
                       className="form-control wd-each-bar-style" id="floatingInputValue4"
                       defaultValue={profile.website}/>
                <label htmlFor="floatingInputValue4">Website</label>
            </div>

            {/*<div className="form-floating mb-3">*/}
            {/*    <input type="text" className="form-control wd-each-bar-style wd-hide-border" id="floatingInputValue5"*/}
            {/*           title="Please input correct date format, eg. 1998/03/19 or Mar 19, 1998 or 01/01/1998, etc."*/}
            {/*           onChange={(event)=>{*/}
            {/*               setLocalProfile({...localProfile, dateOfBirth:event.target.value})*/}
            {/*           }}*/}
            {/*           defaultValue={birth_date.toLocaleDateString("en-US", { month: 'short' })*/}
            {/*                         + " " +*/}
            {/*                         birth_date.toLocaleDateString("en-US", { day: 'numeric' })+", "+*/}
            {/*                         birth_date.toLocaleDateString("en-US", { year: 'numeric' })}/>*/}
            {/*    <label htmlFor="floatingInputValue5">Birth date <sup>.</sup>*/}
            {/*        <span className="wd-edit-font">*/}
            {/*            Edit*/}
            {/*        </span>*/}
            {/*    </label>*/}
            {/*</div>*/}


            {/*alternative way to change birth date*/}
            <div className="form-floating mb-3">
                <h6 className="wd-date-title-font">Birth date <sup>. </sup>
                    <span className="wd-edit-font">
                        Edit
                    </span>
                </h6>


                <input type="date"
                       onChange={(event)=>{
                           setLocalProfile({...localProfile, dateOfBirth:event.target.value})
                       }}
                       defaultValue={profile.dateOfBirth.includes('/')? birth_date_form:
                           profile.dateOfBirth}/>



            </div>


        </>


    )

}





export default EditProfileItem;