import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import './App.css';

function App() {
  let [data, setdata] = useState([]);
  let[counte, setcounte]= useState(4)

  useEffect (() => {
    get();
  }, [counte]);

  let get = async () => {
    let data = await fetch(`https://dummyjson.com/products?pages=1&limit=${counte}`);
    let match = await data.json();
    setdata(match.products);
    
  };
  return (
    <div className="App">
      <div  style={{ display:"flex", flexWrap:"wrap" }}>

      {data.map((ele, i) => {
        return (
          <Col xs={12} md={6} lg={4}  xl={3}key={i} className="main-box">
            <div className="box">
              <div className="image">
                <img src={ele.thumbnail} alt={`img${i}`} />
              </div>
              <h6>{ele.category}</h6>
              <h2>{ele.title}</h2>
              <h3>Price : ${ele.price}</h3>
              <h6>discount : {ele.discountPercentage} %</h6>
              <p>{ele.description}</p>
              <h6>ratings : {ele.rating}</h6>
              <h6>in stock : {ele.stock}</h6>
            </div>
          </Col >
        );
      })}
      <div>
      <button className="back" onClick={()=>setcounte (counte == 4 ? counte = 4 : counte - 4)}>(= back</button>
      <button className="next" onClick={()=>setcounte (4+counte)}>next  =)</button>
      </div>
      </div>
    </div>
  );
}

export default App;
