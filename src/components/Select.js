import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, filterBySubCategory } from "../store/dataSlice";

const Select = () => {
  const dispatch = useDispatch();
  const filterCategory = useSelector((state) => state.dataSlice.filterCategory);
  const [value, setSubValue] = useState("all");

  const selectCategory = (e) => {
    dispatch(filterBySubCategory("all"));
    setSubValue("all");

    if (e.target.value === "all") {
      dispatch(filterByCategory("all"));
    }
    if (e.target.value === "technic") {
      dispatch(filterByCategory("technic"));
    }
    if (e.target.value === "furniture") {
      dispatch(filterByCategory("furniture"));
    }
  };

  const subcategory = {
    all: () => dispatch(filterBySubCategory("all")),
    tv: () => {
      dispatch(filterBySubCategory("tv"));
      setSubValue("tv");
    },
    microwave: () => {
      dispatch(filterBySubCategory("microwave"));
      setSubValue("microwave");
    },
    armchair: () => {
      dispatch(filterBySubCategory("armchair"));
      setSubValue("armchair");
    },
    table: () => {
      dispatch(filterBySubCategory("table"));
      setSubValue("table");
    },
  };
  const selectSubcategory = (e) => subcategory[e.target.value]();

  const renderOptions = (filter) => {
    switch (filter) {
      case "furniture":
        return (
          <>
            <option value="all">Все</option>
            <option value="armchair">Компьютерные кресла</option>
            <option value="table">Компьютерные столы</option>
          </>
        );
      case "technic":
        return (
          <>
            <option value="all">Все</option>
            <option value="tv">Телевизоры</option>
            <option value="microwave">Микроволновые печи</option>
          </>
        );
      default:
        return (
          <>
            <option value="all">Все</option>
            <option value="tv">Телевизоры</option>
            <option value="microwave">Микроволновые печи</option>
            <option value="armchair">Компьютерные кресла</option>
            <option value="table">Компьютерные столы</option>
          </>
        );
    }
  };

  return (
    <form>
      <div className="row">
        <div className="form-row align-items-center border-primary mb-3 ml-3">
          <div className="col-auto my-1">
            <label htmlFor="select">Категории</label>
            <select
              className="custom-select mr-sm-2"
              id="select"
              onChange={(e) => selectCategory(e)}
            >
              <option value="all" default>
                Все
              </option>
              <option value="technic">Бытовая техника</option>
              <option value="furniture">Мебель</option>
            </select>
          </div>
        </div>
        <div className="form-row align-items-center border-primary mb-3 ml-1">
          <div className="col-auto my-1">
            <label htmlFor="subSelect">Подкатегории</label>
            <select
              className="custom-select mr-sm-2"
              id="subSelect"
              onChange={(e) => selectSubcategory(e)}
              disabled={filterCategory === "all"}
              value={value}
            >
              {renderOptions(filterCategory)}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Select;
