import "./App.css";

import MovieList from "./MovieList";
import SearchBox from "./components/SearchBox";



function App() {
  return (
    <div className="App">
      
     <div className="nav">
      <div className="header">
      <h1 className="heading">TOP MOVIES</h1>
      <h4 className="tag">Best Movies Collections for your Weekend</h4>
      </div>
      <div className="search">

    <SearchBox/>
      </div>
     
       </div> 
      

      <div className="card-container">
        
      {MovieList.map((item) => {
        return (
          <div className="card">
          <div className="containers">
            <div className="container1">
            <h2>#{item.ranking} -<span className="title">{item.title}</span>  ({item.year})</h2>
            </div>
            <img className="poster" src={item.img.src} alt={item.img.alt} />
            </div>
            <ul className="info">
            <li>Distributor : {item.distributor}</li>
            <li>Box Office Collection : <span className="amount">{item.amount}</span></li>

            </ul>

          </div>
          
          );
        })}
      
      </div>
    
    </div>

  );
}

export default App;
