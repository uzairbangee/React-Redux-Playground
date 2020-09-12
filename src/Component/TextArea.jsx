import React from 'react'
import {change_text} from "./../Store/Actions/Action";
import { useDispatch, useSelector } from "react-redux";

function TextArea() {

    const text = useSelector(state => state.text);
    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        dispatch(change_text(target.value))
    }

    return (
        <div>
            <textarea placeholder="What's on your mind?" name="text" value={text} onChange={handleChange}></textarea>
        </div>
    )
}

export default TextArea;
