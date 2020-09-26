import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      date: [],
      stock_values: [],
      predict_values: []
    }  
    
  }

  render(){
    return(
      <div className = "Container">
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&display=swap" rel="stylesheet"></link>
          <img src="https://economictimes.indiatimes.com/thumb/msid-71455217,width-3684,height-2068,resizemode-4,imgsize-550306/stocks-market.jpg?from=mdr" 
              className= 'image' alt = "stock_image" />
          <div className = 'heading'><h1> STOCK PREDICTION </h1></div>
      </div>
    )
  }
}

export default App;
