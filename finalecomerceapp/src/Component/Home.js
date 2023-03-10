import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import Header from './Header';

const Home = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:1337/api/best-sellers?populate=*")
        .then((res) => {
          setdata(res.data.data)
        }).catch(()=>{
        }).finally(()=>{
        })
    },[]);

  return (
    <div>
      <Header />
      <div className='container1'>
      {data.map((item, key)=> {
            return <Cards item={item.attributes} />
        })}
      </div>
    </div>
  )
}

export default Home
