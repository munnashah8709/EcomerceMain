import React, { useCallback, useContext } from 'react'
import { CartContext } from '../contex/cart-contex';
import useRazorpay from "react-razorpay";

function Addcart() {
    const {cartData} = useContext(CartContext);
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_YuwVHdv7kh3K99",
            amount: total*100,
            currency: "INR",
            name: "Ms.Store",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "munna shah",
                email: "munnashah8709@gmail.com",
                contact: "8133919401"
            
            },
            notes: {
                address: "work address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])

  return (
   <>
   <div className='container1'>
     {
        cartData.map((data, key)=>{
            return <div className="container">
            <div className="card" style={{ width: "250px" }}>
              <img
                className="card-img-top"src={`http://localhost:1337${data?.image?.data?.attributes?.url}`} alt="game" style={{ width: "99%" , height:"200px"}}
              ></img>
              <div className="card-body">
                <h4 className="card-title">{data.titel}</h4>
                <p className="card-text">{data.Discription}</p>
                <p className="card-text">{data.price}</p>
                <button className="btn btn-primary" onClick={()=>{razorPayDisplay(data.price)}} > buy now</button>
              </div>
            </div>
          </div>
        })
     }

   </div>
   </>
  )
}

export default Addcart
