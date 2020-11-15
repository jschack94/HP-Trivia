import './App.css';
import Welcome from './Welcome';
import React, { Component } from 'react';

class App extends Component {


  componentDidMount() {
    this.floatingCandles();
  }
  
  floatingCandles = () => {
    let leftCandle = document.getElementById('left-candle');
    let rightCandle = document.getElementById('right-candle');

    setInterval(function() {
      leftCandle.classList.toggle('candle-height');
    }, 1300);

    setInterval(function() {
      rightCandle.classList.toggle('candle-height');
    }, 1200);
  };

  render() {
  
      return (

        <div className="wrapper">
        <div id="left-candle" className="candle left">
          <div className="flame" />
          <div className="wax" />
        </div>
       <Welcome/>
        <div id="right-candle" className="candle right">
          <div className="flame" />
          <div className="wax" />
        </div>
      </div>
    );
          
}
      
}
export default App;

      



