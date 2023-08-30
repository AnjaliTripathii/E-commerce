import React,{useState} from 'react';
import Nav from './Component/Nav';
import Rout from './Component/Rout';
import Footer from './Component/Footer';
import Productdetail from './Component/ProductDetail';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  const[close, setClose] = useState(false)

  const[detail,setDetail] = useState([]);

  const [product, setProduct] = useState(Productdetail);

  const searchBtn = (product)=>{
    const change = Productdetail.filter((x)=>{
      return x.Cat === product
    })
    setProduct(change)
  }

  const view = (product) =>{
     setDetail([{...product}]);
     setClose(true)
  }

  return (
    <>
    <BrowserRouter>
      <Nav searchbtn={searchBtn}/>
      <Rout product={product} setProduct={setProduct} detail={detail} view={view} close={close} setClose={setClose} />
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
