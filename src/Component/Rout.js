import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './Home';
import Product from './Product';

const Rout = ({product,setProduct,detail,view}) => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Product' element={<Product product={product} setProduct={setProduct} detail={detail} view={view} />} />
      </Routes>
    </>
  )
}

export default Rout
