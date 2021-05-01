import React from "react";

const ProductDetails = (props) => {
  const id = props.item.id;
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
                {editStatus ? (
                  <div className="edit-textareas">
                    <textarea name="title" onChange={handleValue}>
                      {productDetails.title}
                    </textarea>
                    <textarea
                      name="description"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {productDetails.description}
                    </textarea>
                    <textarea name="img" onChange={handleValue}>
                      {productDetails.img}
                    </textarea>
                    <textarea name="subTitle" onChange={handleValue}>
                      {productDetails.subTitle}
                    </textarea>
                    <textarea
                      name="secondDescription"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {productDetails.secondDescription}
                    </textarea>
                    <textarea name="secondImg" onChange={handleValue}>
                      {productDetails.secondImg}
                    </textarea>
                    <textarea name="price" onChange={handleValue}>
                      {productDetails.price}
                    </textarea>
                  </div>
                ) : (
                  <>
                    <h1>{productDetails.title}</h1>
                    <p className="box-desc">{productDetails.description}</p>
                    <img src={productDetails.img} alt="product-img" />
                    <h2>{productDetails.subTitle}</h2>
                    <p className="box-desc">
                      {productDetails.secondDescription}
                    </p>
                    <img src={productDetails.secondImg} />
                  </>
                )}
                <div className="details_btns"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
