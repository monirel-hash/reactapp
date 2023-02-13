export const reducer = (state = {users: null}, action) => {

    const {type, payload} = action;


    if(type === "SET_USERS"){
        return {...state, users: payload}
    }


    
    return state;

}