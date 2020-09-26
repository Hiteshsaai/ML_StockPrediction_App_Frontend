import axios from 'axios';

url = 'https://stockprediction-ml.herokuapp.com/';

const fetchData = (compName, duration) => {
    let changeableUrl = url;

    if (compName && duration){
        changeableUrl = `${url}/${compNmae}/${duration}`;
    }

    try{
        const {data: Company_Ticker, date, stock_pred_values, stock_values} = await axios.get(changeableUrl);
        
        return {Company_Ticker, date, stock_pred_values, stock_values};
        } catch(error){
            return error;
        }
    };
    
