import React from 'react';
import {connect} from "react-redux";

function Display({text}) {
    return (
        <div>
            TEXT : {text}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        text: state.text
    }
}

export default connect(mapStateToProps)(Display);
