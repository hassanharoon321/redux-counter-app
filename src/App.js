import {connect} from 'react-redux';
import React from 'react';
import Counter from './components/Counter';

class App extends React.Component{
  onIncrement = ()=>{
    this.props.dispatch({
      type:"increment",
      count:100
    })
  }

  onDecrement = ()=>{
    this.props.dispatch({
      type:"decrement",
      count: 50
    })
  }
  
  
  render(){
    return(
      <div>
        <h1>Counter</h1>
        <Counter/>
        <h2>Count: {this.props.counter}</h2>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    counter: state.count
  }
}

const myConnect = connect(mapStateToProps)

export default myConnect(App);