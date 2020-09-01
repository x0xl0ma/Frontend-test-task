import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import Select from "./Select";

const Table = () => {
  const items = useSelector((state) => state.dataSlice.items);
  const filterCategory = useSelector((state) => state.dataSlice.filterCategory);
  const filterSubCategory = useSelector(
    (state) => state.dataSlice.filterSubCategory
  );

  const filteredByCategory = (item) => {
    if (filterCategory === "all") {
      return true;
    }
    if (filterCategory === "technic") {
      return item.category === "Бытовая техника";
    }
    if (filterCategory === "furniture") {
      return item.category === "Мебель";
    }
  };

  const filteredBySubCategory = (item) => {
    if (filterSubCategory === "all") {
      return item;
    }
    if (filterSubCategory === "tv") {
      return item.subcategory === "Телевизоры";
    }
    if (filterSubCategory === "microwave") {
      return item.subcategory === "Микроволновые печи";
    }
    if (filterSubCategory === "armchair") {
      return item.subcategory === "Кресла компьютерные";
    }
    if (filterSubCategory === "table") {
      return item.subcategory === "Столы компьютерные";
    }
  };

  return (
    <div className="container">
      <Link className="btn btn-primary btn-lg mb-3" to="/">
        On Main Page
      </Link>

      <Select />

      <div className="row">
        {items.filter(filteredByCategory).filter(filteredBySubCategory).map((item) => (
          <div className="col-md-6 col-xl-4 mb-3" key={uuidv4()}>
            <div className="">
              <Item item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
