import React, { useContext, useEffect } from "react";
// import ReactPlayer from "react-player";
import { productContext } from "../../context/ProductContext";
import "./ProductDetails.css"

const ProductDetails = (props) => {
  const { getProductDetails, productDetails } = useContext(productContext);
  const id = props.match.params.id;
  console.log(id);
  useEffect(() => {
    getProductDetails(id);
  }, []);
  return (
    <div>
      <div>
        <div className="wraper">
          <div className="container">
            <div className="main-left">
              <div className="main-box">
                {productDetails ? (
                  <>
                  <div className="details-video">
                      <video loop muted autoPlay className="fullscreen-bg__video-details">
                        <source className="productDetails" src={productDetails.video} type="video/mp4" />
                      </video>
                      <h1 className="ditails-title">{productDetails.title}</h1>
                    </div>
                    <div className="details">
                      <p className="box-desc">{productDetails.description}</p>
                      <img src={productDetails.img} alt="product-img" />
                      <h2>{productDetails.subTitle}</h2>
                      <p className="box-desc">
                        {productDetails.secondDescription}
                        {productDetails.type}
                      </p>
                      <img src={productDetails.secondImg} />
                      <p>{productDetails.price}$</p>
                    </div>
                  </>
                ) : (
                  "details"
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
