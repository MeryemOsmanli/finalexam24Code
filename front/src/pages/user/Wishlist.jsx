import React, { useContext } from 'react'
import { WishContext } from '../../context/Wishpovider'
import { Helmet } from 'react-helmet-async'

function Wishlist() {
    const {wishlist,addwishlist,removewishlist}=useContext(WishContext)
  return (
    <div style={{display:"flex",alignItems:'center',justifyContent:"center",flexDirection:"column"}}>
         <Helmet>
        <title>Wishlist</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
         {
        wishlist.map(x=>(
            <div key={x._id}>
                <img src={x.image} alt="" />
               <h1>{x.title} </h1>
               <p>{x.price} </p>
               <button onClick={()=>removewishlist(x)}>x</button>
            </div>
        ))
    }
    </div>
  )
}

export default Wishlist