import React, { useContext } from "react"
import { FaCartPlus, FaShopify} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contex/cart-contex";
import "../style/header.css"

const Header = () => {
  const {cartData} = useContext(CartContext);
  const navigate=useNavigate();
  const handel=()=>{
  navigate("/cartitems")
  }

  return (
    <div>
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
 <FaShopify style={{   color: "white",   width: "50px",  height: "50px",  margin: "5px",}}></FaShopify>
 <h4 className="aaaa">MS.Store</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" style={{fontSize:"30px"}} >Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{fontSize:"30px"}} >About</a>
        </li>
      </ul>
      <form className="d-flex">
      <span style={{color:"white", marginTop:"13px"}}>{cartData.length}</span>
        <FaCartPlus onClick={handel} className="faicon"></FaCartPlus>
        <Link to={"/loging"}><button className="btn btn-primary" type="button" style={{marginRight:"20px"}}>Login</button></Link>
        <input className="form-control me-2" type="text" placeholder="Search"></input>
        <button className="btn btn-primary" type="button" style={{height:"40px"}}>Search</button>
      </form>
    </div>
  </div>
    </nav>
    </div>
  )
}

export default Header
