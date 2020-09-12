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

// const mapStateToProps = state => {
//     return {
//         text: state.text
//     }
// }

// export default connect(mapStateToProps)(Display);
export default Display;
