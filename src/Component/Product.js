import React, {useState} from "react";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {AiOutlineEye} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineCloseCircle} from "react-icons/ai";
import Productdetail from "./ProductDetail";
import "./Product.css";

const Product = ({product, setProduct, detail,view}) => {

  const filterProduct = (product) => {
    const update = Productdetail.filter((x) => {
      return x.Cat === product;
    });
    setProduct(update);
  };

  const AllProducts = () => {
    setProduct(Productdetail);
  };

  return (
    <>
      <div className="product-detail">
        <div className="container">
        <button ><AiOutlineCloseCircle/></button>
          {detail.map((element) => {
            return <div className="product-box">
              <div className="img-box">
                <img src={element.Img} alt={element.Title} />
              </div>
              <div className="details">
                <h4>{element.Cat}</h4>
                <h2>{element.Tilte}</h2>
                <p>A Screen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8... </p>
               <h3>{element.Price}</h3>
               <button>Add To Cart</button>
              </div>
            </div>;
          })}
        </div>
      </div>
      <div className="products">
        <h2>Products</h2>
        <p>Home . Products</p>
        <div className="container">
          <div className="filter">
            <div className="categories">
              <h3>Category</h3>
              <ul>
                <li onClick={() => AllProducts()}>All Products</li>
                <li onClick={() => filterProduct("Tablet")}>Tablet</li>
                <li onClick={() => filterProduct("Smart Watch")}>
                  Smart Watch
                </li>
                <li onClick={() => filterProduct("Headphone")}>Headphone</li>
                <li onClick={() => filterProduct("Camera")}>Camera</li>
                <li onClick={() => filterProduct("Gaming")}>Gaming</li>
              </ul>
            </div>
          </div>
          <div className="product-box">
            <div className="content">
              {product.map((element) => {
                return (
                  <>
                    <div className="box" key={element.id}>
                      <div className="img-box">
                        <img src={element.Img} alt={element.Title} />
                        <div className="icon">
                          <li>
                            <AiOutlineShoppingCart />
                          </li>
                          <li onClick={()=>view(element)}>
                            <AiOutlineEye />
                          </li>
                          <li>
                            <AiOutlineHeart />
                          </li>
                        </div>
                      </div>
                      <div className="details">
                        <p>{element.Cat}</p>
                        <h3>{element.Title}</h3>
                        <h4>${element.Price}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
