import React, { useEffect, useState } from "react";
import "./styles.css";

const Categories = ({ value, onChangeData }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  const [select, setSelect]=useState();
 

  return (
    <div className="category__container">
      <label for="cars">Choose a category:</label>
      <label htmlFor="">{select}</label>
      <select name="cars" id="cars" onChange={onChangeData}>
        {category?.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Categories;
