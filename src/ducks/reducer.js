const initialState = {
    
};

// const UPDATE_USERNAME = "UPDATE_USERNAME";


function reducer(state = initialState, action) {
    switch (action.type) {
        // case UPDATE_USERNAME:
        //     return Object.assign({}, state, { userName: action.payload });
           
        default: return state;
    }
}

// export function updateUsername(userName) {
//     return {
//         type: UPDATE_USERNAME,
//         payload: userName,
//     }
// }

// export function updateUserPassword(userPassword) {
//     return {
//         type: UPDATE_USERPASSWORD,
//         payload: userPassword,
//     }
// }



export default reducer;