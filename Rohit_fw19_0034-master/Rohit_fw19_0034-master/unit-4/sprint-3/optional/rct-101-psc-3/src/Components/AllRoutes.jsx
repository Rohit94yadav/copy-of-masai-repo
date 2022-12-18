import {Routes, Route } from "react-router-dom"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import NotFound from "../Pages/NotFound"
import Products from "../Pages/Products"
import SingleProduct from "../Pages/SingleProduct"
import PrivateRoute from "./PrivateRoute"





function AllRoutes(){
  return (
    <Routes>
      <Route path="/" element ={
      <PrivateRoute>
      <Home/>
      </PrivateRoute>
    }/>
      <Route path="/about" element ={<About/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/products" element ={
       <PrivateRoute>
      <Products/>
      </PrivateRoute>
      }/>
      <Route path="/products/:product_id" element ={<SingleProduct/>}/>
      <Route path="*" element ={<NotFound/>}/>
    </Routes>

  )
}
export default AllRoutes;