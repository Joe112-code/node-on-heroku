//const PROFILE_API = 'http://localhost:4000/api/profile';
const PROFILE_API = 'process.env.PORT';

export const fetchAllProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
                  dispatch({
                               type: 'fetch-all-profile',
                               profile
                           })
        );

export const updateCurrentProfile = (dispatch, profile) =>
    fetch(PROFILE_API, {
        method: 'PUT',
        body: JSON.stringify(profile),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response =>
                dispatch({
                             type: 'update-profile',
                             profile
                         }));