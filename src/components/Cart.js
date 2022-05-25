import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, clear } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  let navigate = useNavigate();
  const products = useSelector((state) => state.cart);
  const price_array = [];
  products.forEach((element) => {
    price_array.push(element.servicee[0].service_price);
  });

  console.log("price_aray", price_array);
  let total = 0;
  // const [price, setPrice] = useState(0);
  console.log("cart products", products);
  price_array.forEach((price) => {
    total = total + parseInt(price);
    console.log("total", total);
    console.log("price", price);
  });

  // console.log("product ID", products.id);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleOrder = () => {
    console.warn("order place sucessfully");
    dispatch(clear());
    navigate("/");
  };
  return (
    <>
      <div>
        <h2 className="cartName">Cart</h2>
        {products.length ? (
          <div className="cartWrapper">
            {products.map((item) => (
              <div className="cartCard">
                <img
                  className="cartImage"
                  src={item.servicee[0].service_image}
                  alt="eventImage"
                />
                <h5>{item.servicee[0].service_name}</h5>
                <h6>{item.servicee[0].service_price}</h6>
                <button
                  className="btn btn-primary cartButton"
                  onClick={() =>
                    handleRemove(item._id, item.servicee[0].service_price)
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        ) : (
          <h1>your cart is empty</h1>
        )}
      </div>
      <div className="orderTotal">
        <p>
          order total <span>{total}</span>
        </p>
        <button btn onClick={handleOrder}>
          place order
        </button>
      </div>
    </>
  );
}

export default Cart;
