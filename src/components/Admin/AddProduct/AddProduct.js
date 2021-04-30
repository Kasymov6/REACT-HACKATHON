import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../../context/ProductContext";
const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: "",
    subTitle: "",
    secondDescription: "",
    secondImg: "",
  });
  const { postNewProduct } = useContext(productContext);

  const handleValues = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  };

  const handleClick = () => {
    postNewProduct(product);
    setProduct({
      title: "",
      description: "",
      img: "",
      subTitle: "",
      secondDescription: "",
      secondImg: "",
    });
  };

  return (
    <div className="inps">
      <input
        className="inp-add"
        value={product.title}
        name="title"
        onChange={handleValues}
        type="text"
        placeholder="Заголовок"
      />
      <input
        className="inp-add"
        value={product.description}
        name="description"
        onChange={handleValues}
        type="text"
        placeholder="Описание"
      />
      <input
        className="inp-add"
        value={product.img}
        name="img"
        onChange={handleValues}
        type="text"
        placeholder="Изображение"
      />
      <input
        className="inp-add"
        value={product.subTitle}
        name="subTitle"
        onChange={handleValues}
        type="text"
        placeholder="Подзаголовок"
      />
      <input
        className="inp-add"
        value={product.secondDescription}
        name="secondDescription"
        onChange={handleValues}
        type="text"
        placeholder="Второе описание"
      />
      <input
        className="inp-add"
        value={product.secondImg}
        name="secondImg"
        onChange={handleValues}
        type="text"
        placeholder="Второе изображение"
      />
      <Link to="/home">
        <button className="btn-add" onClick={handleClick}>
          Добавить
        </button>
      </Link>
    </div>
  );
};

export default AddProduct;
