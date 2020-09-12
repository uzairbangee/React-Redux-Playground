import React from 'react';
import {useSelector} from "react-redux";

function Display() {
    const text = useSelector(state => state.text);
    return (
        <div>
            TEXT : {text}
        </div>
    )
}
export default Display;
