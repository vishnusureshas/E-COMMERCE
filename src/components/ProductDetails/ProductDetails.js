import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { getAllProductId } from "../ApiService/api";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProductId(id);
      setProductDetails(data);
    };
    fetchData();
  }, [id]);

  const handleBuyNow =() => {
    window.confirm("The product is out of stock")
  }

  return (
    <div className="product-details-container">
      <img
        src={productDetails.image}
        alt="alternative"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{productDetails.title}</h2>

        <p className="product-description">{productDetails.description}</p>

        <p className="product-price">{productDetails.price}</p>
        <button className="but-now-button" onClick={handleBuyNow}>Buy Now</button>
        <Link to="/">
          <button className="go-back-home">Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
