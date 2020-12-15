import React from 'react';
import {connect} from 'react-redux'

function Counter(props) {
    return (
        <div>
            <h1>My Count: {props.myCount}</h1>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        myCount:state.count
    }
}

const myConnect = connect(mapStateToProps)

export default myConnect(Counter);