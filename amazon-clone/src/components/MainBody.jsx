import React from "react";
import Makecard from "./MakeCard";
import Store from "../fakeStore";
import Row from "./Row";
import BigCard from "./BigCard";
function MainBody() {
  return (
    <div className="main flex">
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.jewelery} />
      <BigCard image="./banner4.jpg" />

      <Row fetchUrl={Store.womensclothing} heading="Women's Clothing"></Row>
      <Row fetchUrl={Store.mensclothing} heading="Men's Clothing"></Row>
      <Row fetchUrl={Store.electronics} heading="Electronics" />
      <BigCard image="./banner3.jpg" />
      <Makecard fetchUrl={Store.electronics} />
      <Makecard fetchUrl={Store.mensclothing} />
      <Makecard fetchUrl={Store.womensclothing} />
      <BigCard image="./banner5.jpg" />

      <Row fetchUrl={Store.jewelery} heading="Jewelery"></Row>
      <Row fetchUrl={Store.mensclothing} heading="Men Fashion"></Row>
      <BigCard image="./banner6.jpg" />

      <Row fetchUrl={Store.electronics} heading="Computing" />
      <Row fetchUrl={Store.womensclothing} heading="Fashion"></Row>
      <BigCard image="./banner2.jpg" />
    </div>
  );
}

export default MainBody;
