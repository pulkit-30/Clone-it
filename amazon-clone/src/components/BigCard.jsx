import React from "react";

function BigCard(props) {
  return (
    <div className="">
      <div className="BigCard">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default BigCard;
