import React, { useContext } from 'react'
import { MainContext } from '../../context/MainProvider'
import { Helmet } from 'react-helmet-async'

function Basket() {
    const {basket,addbasket,removeBasket,decrease}=useContext(MainContext)
  return (
    <div>
         <Helmet>
        <title>Basket</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
         {
        basket.map(x=>(
            <div key={x._id}>
                <img src={x.image} alt="" />
               <h1>{x.title} </h1>
               <p>{x.price} </p>
               <button onClick={()=>addbasket(x)}>+</button>
               <button onClick={()=>decrease(x)}>-</button>
               <button onClick={()=>removeBasket(x)}>x</button>
               <p>count:{x.count}</p>
            </div>
        ))
    }
    </div>
  )
}

export default Basket