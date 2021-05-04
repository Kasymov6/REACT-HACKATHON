import React, { useContext, useState } from "react";
import { productContext } from "../../../context/ProductContext";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    img: "",
    subTitle: "",
    secondDescription: "",
    secondImg: "",
    price: "",
    video: "",
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
      price: "",
      video: "",
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
      <input
        className="inp-add"
        value={product.price}
        name="price"
        onChange={handleValues}
        type="text"
        placeholder="Цена"
      />
      <input
        className="inp-add"
        value={product.video}
        name="video"
        onChange={handleValues}
        type="text"
        placeholder="Видео"
      />

      <button className="btn-add" onClick={handleClick}>
        Добавить
      </button>
    </div>
  );
};

export default AddProduct;
