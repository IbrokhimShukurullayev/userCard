import React , {useState , useEffect} from 'react'
import axios from "axios"
import "./single.scss"

import rasm from "../../assets/images/330249582_3495798870742645_5452261177176613876_n.jpg"

import {useParams} from "react-router-dom"

const API_URL = "https://jsonplaceholder.typicode.com/users"




function Single() {
    const {id} = useParams()

  const [data , setData] = useState([])

  window.scrollTo(0,0)

  useEffect(()=> {
    // setLoading(true)
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        // .finally(()=> setLoading(false))
    }, [])

    let findProduct = data.find(el => el.id === +id)
  return (
    <div className='container'>
        <div className="home">
            <div className="home__left">
                <img src={rasm} alt="" />
            </div>
            <div className="home__right">
                <h2>Name: <span>{findProduct?.name}</span></h2>
                <h2>Name: <span>{findProduct?.username}</span></h2>
                <h2>Name: <span>{findProduct?.email}</span></h2>
                <h2>Address: <span>{findProduct?.address.street}</span></h2>
                <h2>Phone: <span>{findProduct?.phone}</span></h2>
            </div>
        </div>
    </div>
  )
}

export default Single