import React from 'react'

class Counter extends React.Component {
    constructor (props) {
      super(props);
      this.state = { counter : props.val }
    } 
  
    render() {
      var x = this;
      var { counter } = this.state;
      
      
      setTimeout(function() {
        if (counter > 0) {
          x.setState({ counter: counter - 1 });
        }
      }, 1000);
      var minCounter = Math.floor(counter/60);
      if(minCounter < 10){
          minCounter = '0' + minCounter;
      }
      var secCounter =  counter%60;
      if( secCounter < 10){
        secCounter = '0' + secCounter;
      }

      return <div id="counterID">{minCounter} : {secCounter}</div>;
    }
  }
  
  class Timer extends React.Component {
    render () {
      return <div>
        <Counter val={this.props.setTime} />
      </div>
      ;
    }
  }
  



  export default Timer;