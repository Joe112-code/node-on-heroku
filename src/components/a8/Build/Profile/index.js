import React, {useEffect} from "react";

import "./profile.css"
import {useDispatch, useSelector} from "react-redux";
import ProfileItem from "./ProfileItem";
import {fetchAllProfile} from "../../../../services/profileService";


const selectAllProfileData = (state) => state.profile;
const Profile = ({setEditProfile, edit}) => {
    const profileData = useSelector(selectAllProfileData);
    const dispatch = useDispatch();
    useEffect(() => fetchAllProfile(dispatch), []);


    return(
        <>
            {/*{JSON.stringify(profileData)}*/}

            {
                profileData.map((profile, idx) => {
                    return (
                        <ProfileItem edit={edit} setEditProfile={setEditProfile} key={idx} profile={profile}/>
                    );
                })
            }



        </>

    );



}

export default Profile;