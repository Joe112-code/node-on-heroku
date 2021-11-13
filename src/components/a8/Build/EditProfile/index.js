import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "../Profile/profile.css"
;
import EditProfileItem from "./EditProfileItem";

const EditProfile = ({setEditProfile}) => {
    const profileData = useSelector(state => state.profile);

    return (
        <>
            {
                profileData.map((profile, idx) => {
                    return (
                        <EditProfileItem setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }





        </>
    );


}

export default EditProfile;