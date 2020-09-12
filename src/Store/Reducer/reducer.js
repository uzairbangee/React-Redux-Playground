import {CHANGE_TEXT} from "./../Actions/ActionTypes";

export const initialState = {
    text : ""
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_TEXT:
            return {
                ...state,
                text : action.payload
            }
        default:
            return {
                ...state
            }
    }
}