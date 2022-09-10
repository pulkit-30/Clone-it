import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link, useParams } from "react-router-dom";
function DisplayPage() {
  const [item, updateItem] = useState([]);
  const [recommends,updateRecommends]=useState([])
  const itemId = useParams();
  const id = itemId.id;
  console.log(itemId);
  const category=itemId.category

 useEffect(() => {
   async function fetchData() {
    const request = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      console.log(request.data);
      updateRecommends(request.data);
      request.data.map((item) => {
        item.id === parseInt(id) && updateItem(item);
      });
      return request;
    }
    fetchData();
 }, [id]);
 function displayItem(item) {
  return (
    <div className="image row-item" key={item.id}>
      <img src={item.image} alt="" />
    </div>
  );
}
  return (
    <div className="DisplayPage ">
    <div className="back_to_amazon">
      <Link to="/">Go Back</Link>
    </div>
      <div className="category">{item.category}</div>
      <div className="title">{item.title}</div>
      <div className="flex box">
        <div className="image">
          <img src={item.image} alt="" />
        </div>
        <div className="detail">
          {item.description}
          <div className="price">Price : ${item.price}</div>
          <div>
            <Button className="btn">Buy Now</Button>
            <Button className="btn">Add To Cart</Button>
          </div>
        </div>
      </div>
      <br/>
      <h3>People also look for</h3>
      {<div className="row flex">{recommends.map(displayItem)}</div>}
    </div>
  );
}

export default DisplayPage;
