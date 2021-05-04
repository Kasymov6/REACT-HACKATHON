import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productContext } from "../../context/ProductContext";
import { calcTotalPrice } from "../helpers/calcPrice";
import "./Carts.css";
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
  const { getCart, cart, changeProductCount } = useContext(productContext);
  useEffect(() => {
    getCart();
  }, []);
  console.log(cart);
  return (
    <div className="cart">
      {cart.products ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>SubPrice</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr key={product.item.id}>
                  <td>
                    <img
                      style={{ width: "50px" }}
                      src={product.item.img}
                      alt="product-img"
                    />
                  </td>
                  <td>{product.item.title}</td>
                  <td>{product.item.price}</td>
                  <td>
                    <input
                      type="number"
                      onChange={(e) =>
                        changeProductCount(e.target.value, product.item.id)
                      }
                      value={product.item.count}
                    />
                  </td>
                  <td>{product.subPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total:{calcTotalPrice(cart.products)}</h4>
          <Link to="/order">
            <button>Купить</button>
          </Link>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Cart;
