import {CHANGE_TEXT} from "./ActionTypes";

export const change_text = (text) => {
    console.log('action',text);
    return {
        type : CHANGE_TEXT,
        payload: text
    }
}