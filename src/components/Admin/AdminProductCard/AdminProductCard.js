import "./AdminProductCard.css";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
import ReactPlayer from "react-player";
import { Card } from "@material-ui/core";
const ProductCard = ({ item }) => {
  const id = item.id;
  const history = useHistory();
  console.log(history, "this");
  const { getProductDetails, saveProduct, deleteProduct } = useContext(
    productContext
  );
  const [editStatus, setEditStatus] = useState(false);

  const [editedProduct, setEditedProduct] = useState({});

  const handleValue = (e) => {
    let newProduct = { ...editedProduct, [e.target.name]: e.target.value };
    setEditedProduct(newProduct);
  };
  const handleSave = () => {
    saveProduct(id, editedProduct, history);
    setEditStatus(false);
  };

  const handleEdit = (id) => {
    setEditStatus(true);
    getProductDetails(id);
  };

  const handleDelete = () => {
    deleteProduct(id).then(() => {
      history.push("/");
    });
  };
  return (
    <div>
      <div>
        <div className="pop">
          <div className="container">
            <div className="">
              <div className="car1">
                <div className="car12">
                  <div className="cart2">
                    <div className="all-cards1">
                      <div className="main-card1">
                        {editStatus ? (
                          <div className="edit-textareas">
                            <div className="first-area">
                              <p>Title:</p>
                              <textarea name="title" onChange={handleValue}>
                                {item.title}
                              </textarea>
                              <p>Description:</p>
                              <textarea
                                name="description"
                                onChange={handleValue}
                                className="box-desc"
                              >
                                {item.description}
                              </textarea>
                              <p>First image:</p>
                              <textarea name="img" onChange={handleValue}>
                                {item.img}
                              </textarea>
                              <p>SubTitle:</p>
                              <textarea name="subTitle" onChange={handleValue}>
                                {item.subTitle}
                              </textarea>
                            </div>
                            <div className="second-area">
                              <p>Second description:</p>
                              <textarea
                                name="secondDescription"
                                onChange={handleValue}
                                className="box-desc"
                              >
                                {item.secondDescription}
                              </textarea>
                              <p>Second image:</p>
                              <textarea name="secondImg" onChange={handleValue}>
                                {item.secondImg}
                              </textarea>
                              <p>Price:</p>
                              <textarea
                                name="price"
                                onChange={handleValue}
                                className="box-desc"
                              >
                                {item.price}
                              </textarea>
                              <p>Video:</p>
                              <textarea
                                name="video"
                                onChange={handleValue}
                                className="box-desc"
                              >
                                {item.video}
                              </textarea>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="img-card1">
                              <img src={item.img} alt="product-img" />
                            </div>
                            <div className="info-card1">
                              <h4>{item.title}</h4>
                              <p className="box-desc">{item.description}</p>
                              {/* <h4>{item.subTitle}</h4> */}
                              <p className="box-desc">
                                {/* {item.secondDescription} */}
                              </p>
                              <p>{item.price}$</p>
                            </div>
                            <div className="btns-card1"></div>
                            {/* <img src={item.secondImg} /> */}
                            <video
                              loop
                              muted
                              autoPlay
                              controls
                              className="fullscreen-bg__video"
                            >
                              <source src={item.video} type="video/mp4" />
                            </video>
                          </>
                        )}
                        <div className="details_btns">
                          {editStatus ? (
                            <button className="btns-sho1p" onClick={handleSave}>
                              Сохранить
                            </button>
                          ) : (
                            <button
                              className="btns-sho1p"
                              onClick={() => handleEdit(item.id)}
                            >
                              Редактировать
                            </button>
                          )}
                          <button className="btns-sho1p" onClick={handleDelete}>
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* : (
        "Details"
      )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
