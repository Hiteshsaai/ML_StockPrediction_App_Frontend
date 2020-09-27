import React, {useState} from 'react';
import './App.css';
import {FormControl , FormGroup, Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';
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
    const [stockvalue, setStockvalue] = useState([]);
    const [predstock, setPredstock] = useState([]);

    const fetchData = async(e) => {
        const result = value.split(',');
        console.log(result);
        const ticker = result[0];
        const duration = Number(result[1]);
        e.preventDefault();
        const {data} = await axios.get(`https://stockprediction-hitesh-ml.herokuapp.com/${ticker}/${duration}`);
        // const {Company_Ticker, date, stock_pred_values, stock_values} = await axios.get(`https://stockprediction-hitesh-ml.herokuapp.com/${ticker}/${duration}`);
        setDate(data.date);
        setTicker(data.Company_Ticker);
        setStockvalue(data.stock_values);
        setPredstock(data.stock_pred_values);
        setValue('');
    };
    console.log(stockvalue);
  

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

      </div> 
    );

}



export default App;
