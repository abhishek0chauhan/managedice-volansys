import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, clear } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Cart() {
  let navigate = useNavigate();
  let user_email = localStorage.getItem("email");
  console.log("user_email", user_email);
  // let order = [];
  // const [user_id, setUser_id] = useState("");
  // const [user_email, setUser_email] = useState("");

  const products = useSelector((state) => state.cart);
  let order = [];
  const price_array = [];
  console.log("productssssssss", products);
  products.forEach((element) => {
    price_array.push(element.servicee[0].service_price);
    order.push(element.servicee[0]);
    console.log("orderrrrrrrrrrr", element.servicee[0]);
  });

  console.log("price_aray", price_array);
  console.log("product_array", order);
  let total_price = 0;
  // const [price, setPrice] = useState(0);
  console.log("cart products", products);
  price_array.forEach((price) => {
    total_price = total_price + parseInt(price);
    console.log("total", total_price);
    console.log("price", price);
  });

  // console.log("product ID", products.id);
  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };
  order = Object.assign({}, order);
  console.log("orddgsdcsa", order);
  // let items = { user_email, order, total_price };

  const handleOrder = async () => {
    // order = JSON.stringify(order);
    let items = { user_email, order, total_price };
    console.log(items);

    let result = await fetch(`http://localhost:5000/order/${user_email}`, {
      method: "POST",
      body: JSON.stringify(items),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();

    if (result.success) {
      navigate("/CakePage");
    } else {
      alert("Invalid credential");
    }

    console.warn("order place sucessfully");
    console.log("order place sucessfully");
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
          order total <span>{total_price}</span>
        </p>
        <button btn onClick={handleOrder}>
          place order
        </button>
      </div>
    </>
  );
}

export default Cart;
