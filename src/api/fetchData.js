import axios from 'axios';

const url = 'https://stockprediction-hitesh-ml.herokuapp.com/';

const fetchData = async(compName, duration) => {
    let changeableUrl = url;

    if (compName && duration){
        changeableUrl = `${url}/${compName}/${duration}`;
    }

    try{
        const {data: Company_Ticker, date, stock_pred_values, stock_values} = await axios.get(changeableUrl);
        
        return {Company_Ticker, date, stock_pred_values, stock_values};
        } catch(error){
            return error;
        }
    };
    
    

export default fetchData;
