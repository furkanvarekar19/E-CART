import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import Products from './Products'

const ProductDetail = ({cart,setcart}) => {
const {id} =useParams()

const [product, setproduct] = useState({})
const [relatedproducts,setrelatedproducts] = useState([])

useEffect(() => {
  const filterProduct = items.filter((product)=>product.id== id)
  // console.log(filterProduct);
  setproduct(filterProduct[0]);
  
  const relatedproducts = items.filter((p)=>p.category === product.category)
  // console.log(relatedproducts);
  setrelatedproducts(relatedproducts)
}, [id,product.category])




  return (
   <>
   <div className="container con">
    <div className="img">
      <img src= {product.imgSrc} />
    </div>
    <div className='text-center'>
    <h1 className="card-title"> {product.title} </h1>
       <p className="card-text">  {product.description} </p>
          <button className='btn btn-primary mx-3'> {product.price} ₹</button>
          <button className='btn btn-warning'>Add To Card </button>
    </div>


   </div>
   <h1 className='text-center'>Related Products</h1>
   <Products cart={cart} setcart={setcart}  items={relatedproducts} />
   </>
  )
}

export default ProductDetail