import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Helmet } from "react-helmet-async";

function AdminHome() {
  const [product, setproduct] = useState([]);
  const [search, setsearch] = useState("")
  useEffect(() => {
    getAllInformation();
  }, []);

  async function getAllInformation() {
    const response = await fetch("http://localhost:3000/meryem/");
    const data = await response.json();
    setproduct(data)
    // return data;
  }
   async function getadmindelete(id) {
    const response = await fetch("http://localhost:3000/meryem/"+id ,{
      method:"DELETE"
    });
    const data = await response.json();
    getAllInformation()
  }
  function sortAZ(property) {
   setproduct( [...product].sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0))) 
  }
    function sortZA(property) {
   setproduct( [...product].sort((a,b) => (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0))) 
  }

  return (
    <div>
       <Helmet>
        <title>AdminHome</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
     
      <Formik
        initialValues={{ image: "", title: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          price: Yup.number().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            async function getadminadd() {
              const response = await fetch("http://localhost:3000/meryem/", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
              const data = await response.json();
              getAllInformation()
              // setproduct(data)
            }
            getadminadd()
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="image">image:</label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">title:</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="price">price:</label>
          <Field name="price" type="number" />
          <ErrorMessage name="price" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
       <br />
      <div>
        <button onClick={()=>sortAZ("price")}>artan</button>
        <button onClick={()=>sortZA("price")}>azalan</button>
      </div>
      <br />
      <br />
   <label htmlFor="">filter by name</label>
     

        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
         <br /> <br />

      <div>
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          {product
          .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
          .map((x) => (
            <tr key={x._id}>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.title}</td>
              <td>{x.price}</td>
              <td>
                <button onClick={()=>getadmindelete(x._id)}>delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
