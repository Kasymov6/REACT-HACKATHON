import "./AdminProductCard.css";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
import ReactPlayer from "react-player";
const ProductCard = ({ item }) => {
  const id = item.id;
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

  const handleEdit = (id) => {
    setEditStatus(true);
    getProductDetails(id);
  };

  // useEffect(() => {
  //   getProductDetails(id);
  // }, [editStatus, id]);

  const handleDelete = () => {
    deleteProduct(id).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      {/* {productDetails ? ( */}
      <div>
        <div className="wraper">
          <div className="container">
            <div className="main-left">
              <div className="main-box">
                {editStatus ? (
                  <div className="edit-textareas">
                    <textarea name="title" onChange={handleValue}>
                      {item.title}
                    </textarea>
                    <textarea
                      name="description"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {item.description}
                    </textarea>
                    <textarea name="img" onChange={handleValue}>
                      {item.img}
                    </textarea>
                    <textarea name="subTitle" onChange={handleValue}>
                      {item.subTitle}
                    </textarea>
                    <textarea
                      name="secondDescription"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {item.secondDescription}
                    </textarea>
                    <textarea name="secondImg" onChange={handleValue}>
                      {item.secondImg}
                    </textarea>
                    <textarea
                      name="price"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {item.price}
                    </textarea>
                    <textarea
                      name="video"
                      onChange={handleValue}
                      className="box-desc"
                    >
                      {item.video}
                    </textarea>
                  </div>
                ) : (
                  <>
                    <table>
                      <thead>
                        <tr>
                          <th>Video</th>
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
                          <h1>{item.title}</h1>
                          <p className="box-desc">{item.description}</p>
                          <img src={item.img} alt="product-img" />
                          <h2>{item.subTitle}</h2>
                          <p className="box-desc">{item.secondDescription}</p>
                          <img src={item.secondImg} />
                          <p>{item.price}$</p>
                        </tr>
                        {/* <video
                          loop
                          muted
                          autoPlay
                          controls
                          className="fullscreen-bg__video"
                        >
                          <source src={item.video} type="video/mp4" />
                        </video> */}
                        <ReactPlayer
                          url={item.video}
                          loop
                          muted={true}
                          autoPlay
                        />
                      </tbody>
                    </table>
                  </>
                )}
                <div className="details_btns">
                  {editStatus ? (
                    <button onClick={handleSave}>Сохранить</button>
                  ) : (
                    <button onClick={() => handleEdit(item.id)}>
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
      ){/* : (
        "Details"
      )} */}
    </div>
  );
};

export default ProductCard;
