import '../App.css';
import {useState} from 'react';
import axios from'axios';
import {SAVE_DATA} from './constants/APIConstents'


const SearchStockTable=({data,key,name,symbol,current_price,market_cap})=>{
    const [isSaveData,setSaveData] =useState(false);
    
    const onSaveData=()=>{
            setSaveData(true)
            SAVE_DATAS();
    }
    const SAVE_DATAS=()=>{
        axios({
            baseURL:SAVE_DATA,
            method:'post',
            data:{
                "id":data.id,
                "name": data.name, 
                "symbol":data.symbol, 
                "market_cap": data.market_cap, 
                "current_price": data.current_price,
                "isDataSave":true
            }
        })
        .then((res)=>console.log(JSON.stringify(res)))
        .catch((error)=>console.log(error));
    }

   
    return(
        <div className="stock-container">
           
            <div className="stock-row">
                <div className="stock">
                    <p className="stock-name">{name}</p>
                    <p className="stock-symbol">{symbol}</p>
                </div>
                <div className="stock-data">
                    <p className="stock-volume">${market_cap}</p>
                    {
                        isSaveData?
                        <button className="stock-button-view"> View </button>
                        :
                        <button className="stock-button-saveData" onClick={()=>onSaveData()}> Save Data </button>
                    }
                    <p className="stock-price">${current_price}</p>
                </div>
            </div>
        
        </div>
    )
}
export default SearchStockTable