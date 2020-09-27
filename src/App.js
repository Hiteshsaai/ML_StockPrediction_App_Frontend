import React, {Component} from 'react';
import './App.css';
import {FormControl , FormGroup, FormLabel, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchData from './api/fetchData';

class App extends Component {

    state = {
      data: {},
      date: [],
      stock_values: [],
      predict_values: [],
      given_name: '',
      duration: ''
    }  
    

  async componentDidMount(){
    const data = await fetchData();

    this.setState({data: data})
    console.log(this.state);
  }

  onChangeCompanyName(e){
    this.setState(
      {given_name : e.target.value}
      );
  }

  onChangePredictDuration(e){
    this.setState(
      {duration: e.target.value}
    )
  }
  
  // handleCountryChange = async () => {
  //   const data = await fetchData(country);

  //   this.setState({ data, country: country });

  // handleCountryChange = async (compName) => {
  //   const data = await fetchData(compName);

  //   this.setState({ data, country: country });
  // }



  render(){

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
              <Col> <FormControl size="lg" type="text"  placeholder="Company Name" onChange = {this.onChangeCompanyName}/> </Col>
              <Col xs = {5}> <FormControl type="text"  placeholder="Prediction days (Should be Integer)" onKeyPress = {this.onChangePredictDuration}/></Col>
          </Row>
          </Container>
        </FormGroup>
        </div>
      </div> 
    )
  }

}


export default App;
