import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import AdminHome from "./pages/admin/AdminHome";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Basket from "./pages/user/Basket";
import Wishlist from "./pages/user/Wishlist";
import Detail from "./pages/user/Detail";
import LayAdmin from "./layout/LayAdmin";
import MainProvider from "./context/MainProvider";
import Wishpovider from "./context/Wishpovider";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <>
     <HelmetProvider>

    <Wishpovider>
       <MainProvider>
       <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<LayAdmin />}>
          <Route index element={<AdminHome />} />
        </Route>
         <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
     </MainProvider>
    </Wishpovider>
     </HelmetProvider>
    </>
  )
}

export default App
