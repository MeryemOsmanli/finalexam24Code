import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import { WishContext } from "../../context/Wishpovider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./home.scss";

function Home() {
  const { basket, addbasket } = useContext(MainContext);
  const { wishlist, addwishlist, removewishlist } = useContext(WishContext);

  const [product, setproduct] = useState([]);
  useEffect(() => {
    getAllInformation();
  }, []);

  async function getAllInformation() {
    const response = await fetch("http://localhost:3000/meryem/");
    const data = await response.json();
    setproduct(data);
  }
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <div className="hero_sec">
        <div className="overlay_hero ">
          <div>
            <p>SPRING / SUMMER COLLECTION 2017</p>
          </div>
          <div>
            <h1>Get up to 30% Off New Arrivals</h1>
          </div>
          <div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div className="womens_sec_back">
        <div className="womens_sec_contain">
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg"
              alt=""
            />
            <div className="overlay_womens">
              <div>WOMEN'S</div>
            </div>
          </div>
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg"
              alt=""
            />
            <div className="overlay_womens">
              <div>ACCESSORIES'S</div>
            </div>
          </div>
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg"
              alt=""
            />
            <div className="overlay_womens">
              <div>MEN'S</div>
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
          <div className="filter_btns">
            <button className="orangebtn">ALL</button>
            <button>WOMEN'S</button>
            <button> ACCESSORIES'S</button>
            <button>MEN'S</button>
          </div>
          <div className="fetch_data_background">
            <div className="fetch_data_contain">
          
              {product.map((x) => (
                <div className="fetch_box" key={x._id}>
                  <div className="fetch_image">
                    <img
                     src={x.image}
                      alt=""
                    />
                  </div>
                  <div className="fetch_title">
                    <p>{x.title}</p>
                  </div>
                  <div className="fetch_price">
                    <p>${x.price}</p>
                  </div>
                  <div className="btns_add">
                    <button onClick={()=>addbasket(x)}>Addbasket</button>
                    <button onClick={()=>addwishlist(x)}>Addwishlist</button>
                    <button><Link to={`detail/${x._id}`}> <i class="fa-solid fa-eye"></i></Link></button>
                  
                  </div>
                </div>
              ))}

            
            </div>
          </div>
        </div>
      </div>
      <div className="product_background">
        <div className="product_contain">
          <div className="new_arrivals">
            <h3>Best Sellers</h3>
            <div></div>
          </div>
        
          <div className="fetch_data_background">
            <div className="fetch_data_contain">
          
              {/* {product.map((x) => (
                <div className="fetch_box" key={x._id}>
                  <div className="fetch_image">
                    <img
                     src={x.image}
                      alt=""
                    />
                  </div>
                  <div className="fetch_title">
                    <p>{x.title}</p>
                  </div>
                  <div className="fetch_price">
                    <p>${x.price}</p>
                  </div>
                  <div className="btns_add">
                    <button onClick={()=>addbasket(x)}>Addbasket</button>
                    <button onClick={()=>addwishlist(x)}>Addbasket</button>
                    <button><Link to={`detail/${x._id}`}> <i class="fa-solid fa-eye"></i></Link></button>
                  
                  </div>
                </div>
              ))} */}

              <div className="fetch_box">
                <div className="fetch_image">
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_1.png"
                    alt=""
                  />
                </div>
                <div className="fetch_title">
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                </div>
                <div className="fetch_price">
                  <p>$520.00</p>
                </div>
              
              </div>
              <div className="fetch_box">
                <div className="fetch_image">
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_2.png"
                    alt=""
                  />
                </div>
                <div className="fetch_title">
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                </div>
                <div className="fetch_price">
                  <p>$520.00</p>
                </div>
               
              </div>
              <div className="fetch_box">
                <div className="fetch_image">
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_3.png"
                    alt=""
                  />
                </div>
                <div className="fetch_title">
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                </div>
                <div className="fetch_price">
                  <p>$520.00</p>
                </div>
                
              </div>
              <div className="fetch_box">
                <div className="fetch_image">
                  <img
                    src="https://preview.colorlib.com/theme/coloshop/images/product_5.png"
                    alt=""
                  />
                </div>
                <div className="fetch_title">
                  <p>Fujifilm X100T 16 MP Digital Camera (Silver)</p>
                </div>
                <div className="fetch_price">
                  <p>$520.00</p>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="womens_sec_back">
        <div className="womens_sec_contain">
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg"
              alt=""
            />
          
          </div>
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg"
              alt=""
            />
          
          </div>
          <div className="womens_box">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg"
              alt=""
            />
           
          </div>
        </div>
      </div>
      <div className="newsletter_background">
        <div className="newsletter_container container">
          <div className="newsletter_left">
            <h6>Newsletter</h6>
            <p>Subscribe to our newsletter and get 20% off your first purchase</p>
          </div>
          <div className="newsletter_right">
            <input type="text" placeholder="Your Email"/>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
