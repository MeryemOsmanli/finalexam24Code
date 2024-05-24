import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [detail, setdetail] = useState([]);
  useEffect(() => {
    getonedetail();
  }, []);

  async function getalldetail(id) {
    const response = await fetch("http://localhost:3000/meryem/" + id);
    const data = await response.json();
    setdetail(data);
  }

  async function getonedetail() {
    let details = await getalldetail(id);
    setdetail(details);
  }
  return (
    <div>
      <Helmet>
        <title></title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div key={detail._id}>
        <img src={detail.image} alt="" />
        <h1>{detail.title} </h1>
        <p>{detail.price} </p>
      </div>
    </div>
  );
}

export default Detail;
