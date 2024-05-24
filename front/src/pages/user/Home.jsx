import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import { WishContext } from "../../context/Wishpovider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./home.scss"

function Home() {
  const { basket, addbasket } = useContext(MainContext);
    const {wishlist,addwishlist,removewishlist}=useContext(WishContext)

  const [product, setproduct] = useState([]);
  useEffect(() => {
    getAllInformation()
  
  
  }, [])
  

  async function getAllInformation() {
    const response = await fetch("http://localhost:3000/meryem/");
    const data = await response.json();
  setproduct(data)
  }
  return <div>
     <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
    {/* {
        product.map(x=>(
            <div key={x._id}>
                <img src={x.image} alt="" />
               <h1>{x.title} </h1>
               <p>{x.price} </p>
               <button onClick={()=>addbasket(x)}>addbasket</button>
               <button onClick={()=>addwishlist(x)}>addbasket</button>
               <button><Link to={`detail/${x._id}`}>detail</Link></button>
            </div>
        ))
    } */}
    <div className="hero_sec">
      <div className="overlay_hero ">
        <div>
        <p>SPRING / SUMMER COLLECTION 2017</p>
        </div>
        <div><h1>Get up to 30% Off New Arrivals</h1></div>
      <div>
        <button>SHOP NOW</button>
      </div>
      </div>
    </div>
    <div className="womens_sec_back">
      <div className="womens_sec_contain">
        <div className="womens_box">
          <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
          <div className="overlay_womens">
            <div>
              WOMEN'S
            </div>
          </div>
        </div>
  <div className="womens_box">
          <img src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
          <div className="overlay_womens">
            <div>
             ACCESSORIES'S
            </div>
          </div>
        </div>  
          <div className="womens_box">
          <img src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
          <div className="overlay_womens">
            <div>
              MEN'S
            </div>
          </div>
        </div>      
      </div>
    </div>
    <div className="product_background">
      <div className="product_contain">
        <div className="new_arrivals">
          <h3>New Arrivals</h3>
          <div></div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>;
}

export default Home;
