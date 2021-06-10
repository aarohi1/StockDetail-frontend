import react,{useEffect,useState} from 'react';
import Header from './components/Header';
import './App.css';
import axios from'axios';
import HeroCards from './components/HeroCards'
import SearchStockTable from './components/SearchStockTable'
import {SAVE_DATA, GET_DATA} from './components/constants/APIConstents';


function App() {
  
  const [stocks, setStock] = useState([])
  const [search, setSearch] = useState('');
  const [activePage,setActivePage]=useState(15)

  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=5&page=1&sparkline=false')
    .then(res=>{
      setStock(res.data);
      console.log(JSON.stringify(res.data));
    })
    .catch(error =>console.log(error));
  },[]);

  
  const handleChange=e=>{
    setSearch(e.target.value)
  }
  
  const filterStock = stocks.filter(stock=>
    stock.name.toLowerCase().includes(search.toLowerCase())
    
    )

  return (
    <div className="stock-app">
      <Header/>
      <HeroCards/>
      <div className="stock-table">
        <div className="stock-search">
              <p>Stock Details Table</p>
              <form>
                  <input type="text" className="stock-input" placeholder="Search by Company Name" onChange={handleChange}/>
              </form>
          </div>
          <div className="table-heading">
                    <h3>Company Name</h3>
                    <h3>Symbol</h3>
                    <h3>Market Cap</h3>
                    <h3></h3>
                    <h3 style={{marginLeft:25}}>Current Price</h3>
          </div>
            {
              filterStock.map(stock=>{
                return(
                  <SearchStockTable 
                    data={stock}
                    key={stock.id}
                    name={stock.name}
                    symbol={stock.symbol}
                    market_cap={stock.market_cap}
                    current_price={stock.current_price}
                  />
                )
              })
            }
          </div>
          
    </div>
  );
}

export default App;