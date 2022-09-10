import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "../StateProvider";
import { useState } from "react";
import { useEffect } from "react";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [{ basket }, dispatch] = useStateValue();
  var price = 0;
  useEffect(() => {
    basket.map((item) => {
      price += parseFloat(item.price);
      setTotalPrice(price);
    });
  }, []);
  function displayCartItem(item, index) {
    return (
      <div key={item.id}>
        <div className="cart-card flex">
          <div className="img">
            <img src={item.image} alt="" />
          </div>
          <div className="detail flex">
            <div className="title">{item.title}</div>
            {item.detail}
            <div>${item.price}</div>
            <div>
              <Button
                className="btn"
                onClick={() => {
                  return dispatch({
                    type: "Remove_From_Cart",
                    item: {
                      id: item.id,
                      index: index,
                    },
                  });
                }}
              >
                Remove from Cart
              </Button>
              <Button className="btn">Buy Now</Button>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
  return (
    <div>
      <div className="Cart">
        <div className="price-card flex ">
          <img src="./shop.png" alt="" className="img" />
          <div>
            <h4>Shop All Items in Your Cart</h4>
            <div>Total Price={totalPrice}</div>
            <Button className="btn">Buy Now</Button>
          </div>
        </div>
        {basket.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <h6>Start Adding Items to your basket</h6>
          </div>
        ) : (
          basket.map(displayCartItem)
        )}
      </div>
    </div>
  );
}

export default Cart;
