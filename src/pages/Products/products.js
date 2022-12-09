import React, { useEffect, useState } from "react";
import AddProducts from "./components/addproducts/AddProducts";
import Button from "./components/button/Button";
import CardBody from "./components/cards/CardBody";
import Category from "./components/categories";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

import "./products.css";
const Products = () => {
  const [items, setItem] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [addedItems, setAddedItem] = useState([]);
  const [showAddProducts, setShowAddProducts] = useState(false);
  const [filterCategory, setFilterCategory] = useState("");
  console.log(filterCategory)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);

  function changingSearchData(e) {
    setSearchValue(e.target.value);
  }

  function categoriFilter(e){
    setFilterCategory(e.target.value)
  }

  const itmesFilter = items.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const categoryFilter = items.filter((item)=>
  item.category.toLowerCase().includes(filterCategory.toLowerCase))

  function addItem(item) {
    item.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, item]);
  }

  function removeItem(item) {
    const newItems = addedItems.filter((addedItem) => addedItem.id !== item.id);
    setAddedItem(newItems);
  }

  return (
    <div className="body__container">
      <div className="nav">
        <Header />
        <div className="nav-right">
          <Search
            products={items}
            value={searchValue}
            onChangeData={changingSearchData}
          />
          <Button num={addedItems.length} click={setShowAddProducts} />
        </div>
      </div>
      <Category 
      products={items}
      value={filterCategory}
       onChangeData={categoriFilter}
      />

      {showAddProducts && (
        <AddProducts
          click={setShowAddProducts}
          items={addedItems}
          removeItem={removeItem}
          setAddedItem={setAddedItem}
        />
      )}
      <CardBody
        products={itmesFilter}
        addItem={addItem}
        removeItem={removeItem}
        addedItems={addedItems}
        filterCategory ={categoryFilter}
      />
    </div>
  );
};

export default Products;
