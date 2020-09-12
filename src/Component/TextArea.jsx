import React from 'react'
import {change_text} from "./../Store/Actions/Action";
import { useDispatch, useSelector } from "react-redux";
// import {connect} from "react-redux";

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

// const mapStateToProps = state => {
//     return {
//         text: state.text
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return{
//         change_new_text : (text) => dispatch(change_text(text))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(TextArea);
export default TextArea;
