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
                      <div classNam="description-subTitle">
                        <h2 className="details-description">{productDetails.description}</h2>
                        <p className="details-subTitle">{productDetails.subTitle}</p>
                      </div>
                      <div className="img-description">
                        <img className="details-img" src={productDetails.secondImg} />
                      </div>
                      <div>
                        
                        <p className="details-secondDescription">
                        {productDetails.secondDescription}
                        {productDetails.type}
                        </p>
                      </div>
                      
                      
                      {/* <p>{productDetails.price}$</p> */}
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
