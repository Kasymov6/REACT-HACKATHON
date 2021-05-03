import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { productContext } from "../../../context/ProductContext";
// import "./AdminProductCard.css";

const AdminProductCard = (props) => {
    const id = props.item.id;
    const [editedTopic, setEditedTopic] = useState({});
    const history = useHistory();
    const {
        getProductDetails,
        productDetails,
        saveProduct,
        deleteProduct,
    } = useContext(productContext);
    const handleDelete = () => {
        deleteProduct(id).then(() => {
            history.push("/");
        });
    };

    // const handleValue = (e) => {
    //     let newTopic = { ...editedTopic, [e.target.name]: e.target.value };
    //     // setEditedProduct(newTopic);
    // };

    return (
        <div className="cart">
            <img src={props.item.img} />
            <div className="alert">
                <h3>{props.item.title}</h3>
                <div class="price-shop">
                    <p>{props.item.price}$</p>
                </div>
                <button onClick={() => handleDelete(id)}>Удалить</button>
                <button>Редактировать</button>
            </div>
        </div>
    );
};

export default AdminProductCard;
