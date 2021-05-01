import "./AdminProductCard.css";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../../context/ProductContext";

const AdminProductCard = (props) => {
  const id = props.item.id;
  const history = useHistory();
  const {
    getProductDetails,
    productDetails,
    saveProduct,
    deleteProduct,
  } = useContext(productContext);
  const [editStatus, setEditStatus] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});

  const handleValue = (e) => {
    let newProduct = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(newProduct);
  };
  const handleSave = () => {
    saveProduct(id, editedProduct);
    setEditStatus(false);
  };

  useEffect(() => {
    getProductDetails(id);
  }, [editStatus, id]);

  const handleDelete = () => {
    deleteProduct(id).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {productDetails ? (
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
                      <textarea
                        name="price"
                        onChange={handleValue}
                        className="box-desc"
                      >
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
                      <p className="box-desc">{productDetails.price}</p>
                    </>
                  )}
                  <div className="details_btns">
                    {editStatus ? (
                      <button onClick={handleSave}>
                        <img
                          src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png"
                          alt="btn-icon"
                        />
                        Сохранить
                      </button>
                    ) : (
                      <button onClick={() => setEditStatus(true)}>
                        <img
                          src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png"
                          alt="btn-icon"
                        />
                        Редактировать
                      </button>
                    )}
                    <button onClick={handleDelete} className="btn-delete">
                      <img src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png" />
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "Details"
      )}
    </div>
  );
};
export default AdminProductCard;
