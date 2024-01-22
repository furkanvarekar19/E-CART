import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import Products from './componets/Products'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './componets/ProductDetail'
import SearchItem from './componets/SearchItem'
import Card from './componets/Card'
import { items } from './componets/Data'
import Adds from './componets/Adds'
import Footer from './componets/Footer'



function App() {
const [data, setdata] = useState([...items])

const [cart, setcart] = useState([])




  return (
    <>
    <Router>
     <Navbar  cart={cart} setdata={setdata} />
    

      <Adds/>
     <Routes>
      <Route path="/" element={<Products cart={cart} setcart={setcart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail  cart={cart}  setcart= {setcart}/>}/>
      <Route path="/search/:term" element={<SearchItem cart={cart}  setcart= {setcart} />}/>
      <Route path="/card" element={<Card cart={cart} setcart={setcart} />}/>


     </Routes>
 
     <Footer/>
     </Router>
    </>
  )
}

export default App;
