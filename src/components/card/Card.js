import React , {useEffect , useState} from 'react'
import axios from "axios"
import "./card.scss"
import { Link } from 'react-router-dom'
import {imgArray} from "../../static/index"




import person from "../../assets/images/330249582_3495798870742645_5452261177176613876_n.jpg"

const API_URL = "https://jsonplaceholder.typicode.com/users"

function Card() {

  const [data , setData] = useState([])
  // const [loading, setLoading] = useState(false)

    window.scrollTo(0,0)

      useEffect(()=> {
      // setLoading(true)
        axios
        .get(API_URL)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
        // .finally(()=> setLoading(false))
    }, [])


    let images = imgArray?.map(el=>
    <img key={el.id} src={el.img} alt="" />
    )


        let products = data?.map(el=> (
            <div key={el.id} className="card">
              <Link to={`/single/${el.id}`}>
                <img src={person} alt="" />
              </Link>
                <h2 className="card__title">
                  {el.name}
                </h2>
                <p className="card__text">
                  {el.company.name}
                </p>
                <p className="card__list">
                  A kiddo who uses Bootstrap and Laravel in web development. Currently playing around with design via Figma
                </p>
                <h3 className='card__email'>{el.email}</h3>
            </div>
        ))

  return (
    <section>
        <div className="container">
            <div className="row">
              {/* {
                imgArray?.map(el =><img key={el.id} src={el.img} alt="" />   )
              } */}
                {products}
            </div>
        </div>
    </section>
  )
}

export default Card