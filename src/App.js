import "./App.css";
import Navbar from "./components/Navbar";
import data from "./data";



function App() {
  return (
    <div className="App">
      <Navbar />
      
      <div id="header">

      <h1 id="heading">TOP MOVIES</h1>
      <h4 id="tag">Best Movies Collections for your Weekend</h4>
      </div>
     
      

      {data.map((item) => {
        return (
          <div id="card">
          <div id="containers">
            <div id="container1">
            <h2>#{item.ranking} -<span id="title">{item.title}</span>  ({item.year})</h2>
            </div>
            <img className="poster" src={item.img.src} alt={item.img.alt} />
            </div>
            <ul id="info">
            <li>Distributor : {item.distributor}</li>
            <li>Box Office Collection : <span id="amount">{item.amount}</span></li>

            </ul>

          </div>
          
        );
      })}
    </div>
  );
}

export default App;
