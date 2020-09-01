import React from "react";

const Item = ({ item }) => {
  return (
    <div className="">
      <div className="card border-primary">
        <div className="card-body text-center">
          <div>
            <strong>Name</strong>: {item.name}
          </div>
          <div>
            <strong>Category</strong>: {item.category}
          </div>
          <div>
            <strong>Price</strong>: {item.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
