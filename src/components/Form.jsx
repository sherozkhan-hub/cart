import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Form = () => {
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(null);
  // console.log(name);
  // console.log(price);
  const dispatch = useDispatch();
  const { cartItems, name, price } = useSelector((state) => state.cart);
  const formName = (opt) => {
    dispatch({ type: "form", payload: opt });
  };
  const formPrice = (opt) => {
    dispatch({ type: "formP", payload: opt });
  };

  const addToList = () => {
    // dispatch({ type: "adding", payload: { name, price } });
    const newarray = [...cartItems, { name, price }];
    dispatch({ type: "adding", payload: newarray });
  };

  return (
    <div className="page">
      <div className="form">
        <form>
          <input
            type="text"
            placeholder="Enter Product Name"
            onChange={(e) => formName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Price"
            onChange={(e) => formPrice(e.target.value)}
          />
          <button onClick={addToList}>Add to List</button>
        </form>
      </div>
      <div className="list">
        {cartItems.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};
export default Form;
