import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../contex/cart-contex";
import "../style/header.css";
function Cards({ item }) {
  const { addCartData } = useContext(CartContext);

  const navigate = useNavigate();
  
  return (
    <div>
        <div className="container">
          <div className="card" style={{ width: "250px" }}>
            <img
              className="card-img-top"src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="game" style={{ width: "99%" , height:"200px"}}
            ></img>
            <div className="card-body">
              <h4 className="card-title">{item.titel}</h4>
              <p className="card-text">{item.Discription}</p>
              <p className="card-text">{item.price}</p>
              <button onClick={()=> {addCartData(item)}} className="btn btn-primary"> Add To Chart </button>
            </div>
          </div>
        </div>
      
      </div>
  );
}

export default Cards;
