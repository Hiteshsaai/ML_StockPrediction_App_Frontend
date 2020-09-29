import React, {useState} from 'react';
import './App.css';
import {FormControl , FormGroup, Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Charts, ChartContainer, ChartRow, YAxis, LineChart } from "react-timeseries-charts";
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries, VerticalGridLines, LineMarkSeries} from 'react-vis';
import { TimeSeries } from "pondjs";
import axios from 'axios';
// import fetchData from './api/fetchData';

const App = () =>  {

    // state = {
    //   data: {},
    //   input: "",
    //   date: [],
    //   stock_values: [],
    //   predict_values: [],
    // }  

    const [value, setValue] = useState('');
    const [date, setDate] = useState([]);
    const [ticker, setTicker] = useState('');
    // const [stockvalue, setStockvalue] = useState([]);
    // const [predstock, setPredstock] = useState([]);
    const[allstockvalue, setAllstockvalue] = useState([]);

    // const num1 = ["2018-01-02",
    // "2018-01-03",
    // "2018-01-04",
    // "2018-01-05",
    // "2018-01-08",
    // "2018-01-09",
    // "2018-01-10",
    // "2018-01-11",];
    // const num2 = [3,4,5,6,7,8,9,10];

    // const data = [];
    // num1.forEach((date, index) => {
    //   const value = num2[index];
    //   data.push({x: new Date(date), y: value})
    // });

    // console.log(data);

    const fetchData = async(e) => {
        const result = value.split(',');
        console.log(result);
        const ticker = result[0];
        const duration = Number(result[1]);
        e.preventDefault();
        const {data} = await axios.get(`https://stockprediction-hitesh-ml.herokuapp.com/${ticker}/${duration}`);
        setDate(data.date);
        const all_value = data.stock_values.concat(data.stock_pred_values); 
        setAllstockvalue(all_value);
        setTicker(data.Company_Ticker);
        setValue('');
    };
    

    const result = [];
    date.forEach((currDate, index) => {
      const value = allstockvalue[index];
      console.log(value);
      result.push({x: new Date(currDate), y: value})
    });

    console.log(result);



    return(
      <div>
        <div className = "Container">
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700;900&display=swap" rel="stylesheet"></link>
            <img src="https://economictimes.indiatimes.com/thumb/msid-71455217,width-3684,height-2068,resizemode-4,imgsize-550306/stocks-market.jpg?from=mdr" 
                className= 'image' alt = "stock_image" />
            <div className = 'heading'><h1> STOCK PREDICTION </h1></div>
        </div>
        <div class = 'form'>
        <FormGroup>
          <Container>
            <Row>
              <Col> <FormControl value = {value} size="lg" type="text"  placeholder="Company Name, Prediction days(Give Integer)" onChange = {e => setValue(e.target.value)}/> </Col>
              {/* <Col xs = {5}> <FormControl type="text"  placeholder="Prediction days (Should be Integer)" onKeyPress = {this.onChangePredictDuration}/></Col> */}
          </Row>
          <div className="mb-2 button">
            <Button variant="primary" size="lg" onClick = {fetchData}>
                Predict
            </Button>
          </div>
          </Container>
        </FormGroup>
        </div>
        {result && (<div>
          <XYPlot xType="time" width={1000} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis title="X Axis" />
          <YAxis title="Y Axis" />
          <LineMarkSeries data={result}/>
          </XYPlot>  
        </div>
)}
      
      </div> 
    );

}



export default App;
