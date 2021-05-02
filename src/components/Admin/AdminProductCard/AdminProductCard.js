import "./AdminProductCard.css";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
const ProductCard = (props) => {
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
                      <table>
                        <thead>
                          <tr>
                            <th>Title</th>
                            <th>description</th>
                            <th>subTitle</th>
                            <th>Image</th>
                            <th>secondDescription</th>
                            <th>secondImg</th>
                            <th>price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{props.item.title}</td>
                            <td>{props.item.description}</td>
                            <td>{props.item.subTitle}</td>
                            <td>{props.item.img}</td>
                            <td>{props.item.secondDescription}</td>
                            <td>{props.item.secondImg}</td>
                            <td>{props.item.price}</td>
                          </tr>
                        </tbody>
                      </table>
                    </>
                  )}
                  <div className="details_btns">
                    {editStatus ? (
                      <button onClick={handleSave}>Сохранить</button>
                    ) : (
                      <button onClick={() => setEditStatus(true)}>
                        Редактировать
                      </button>
                    )}
                    <button onClick={handleDelete} className="btn-delete">
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

export default ProductCard;
