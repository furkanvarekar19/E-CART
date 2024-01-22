import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsCartCheckFill } from 'react-icons/bs';
// import { BsCartCheckFill } from "react-icons/bs";


const Navbar = ({setdata,cart}) => {
 const navigate = useNavigate()

  const [searchIterm, setsearchIterm] = useState("")

const filterByCategroy = (category)=>{
  const element = items.filter((Product)=>Product.category === category)
  setdata(element)
}


const filterByPrice = (price) =>{
  const element = items.filter((Product)=>Product.price >= price) 
  setdata(element)
}

const handleSubmit = (e)=>{
  e.preventDefault();
  navigate(`/search/${searchIterm}`)
  setsearchIterm("")

}




  
  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">ecommerce</Link>

            <form onSubmit={handleSubmit} className="search-bar">
                <input
                value={searchIterm}
                onChange={(e)=>setsearchIterm(e.target.value)}
                 type="text"
                 placeholder='Search products'
                  />
            </form>

            <Link to={'/card'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
            <BsCartCheckFill  style={{fontSize:"1.5rem"}}/> 
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        <div className="nav-bar-wraper">
            <div className="items">Filter-By {"=>"}</div>
            <div className="items" onClick={()=>setdata(items)}>No Filter</div>
            <div className="items" onClick={()=>filterByCategroy('mobiles')}>Mobiles</div>
            <div className="items" onClick={()=>filterByCategroy('laptops')}>Laptops</div>
            <div className="items" onClick={()=>filterByCategroy('tablets')}>Tablest</div>
            <div className="items" onClick={()=>filterByPrice('29999')} > {">="}29999 </div>
            <div className="items" onClick={()=>filterByPrice('49999')}> {">="}49999 </div>
            <div className="items" onClick={()=>filterByPrice('69999')}> {">="}69999 </div>
            <div className="items" onClick={()=>filterByPrice('89999')}> {">="}89999 </div>

        </div>
    </header>

    </>
  )
}

export default Navbar