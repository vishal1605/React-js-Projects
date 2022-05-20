import React, { Component } from 'react'

class IncreaseCounter extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.interval = setInterval(this.tick,1000);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval(this.interval);
    }

    tick=()=>{
        this.setState(
            {count:this.state.count+1}
        )
    }
  render() {
    return (
      <h1>{this.state.count}</h1>
    )
  }
}

export default IncreaseCounter