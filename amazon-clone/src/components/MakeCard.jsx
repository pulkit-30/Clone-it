import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../StateProvider";

function Makecard(props) {
  const [{ basket }, dispatch] = useStateValue();
  const [storeItems, UpdateStoreItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      UpdateStoreItems(request.data);
      return request;
    }
    fetchData();
  }, [props.fetchUrl]);

  function displayItem(item) {
    return (
      <div className="Card flex" key={item.id}>
        <Link to={`/DisplayPage/${item.category}/${item.id}`}>
          <div className="title">{item.title}</div>
          <div className="image">
            <img src={item.image} alt="" />
          </div>
        </Link>
        <div className="price">${item.price}</div>
        <div className="link">see more > </div>
        <div>
          <Button
            className="add-cart-btn"
            onClick={() => {
              console.log(item);
              dispatch({
                type: "Add_To_Cart",
                item: {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  price: item.price,
                  detail: item.description,
                },
              });
            }}
          >
            Add to cart
          </Button>
        </div>
      </div>
    );
  }

  return storeItems.map(displayItem);
}

export default Makecard;
