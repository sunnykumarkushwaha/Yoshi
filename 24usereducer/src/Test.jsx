import React from "react";
import { useReducer } from "react";

const Test = () => {
  const intial = 1;
  const reducer = (current, action) => {
    switch (action) {
      case "plus":
        return current + 1;
      case "minus":
        return current - 1;
    }
    function multipy() {
      return current * 2;
    }
  };
  const [state, dispatch] = useReducer(reducer, intial);

  return (
    <>
      <button
        onClick={() => {
          dispatch("plus");
        }}
      >
        plus
      </button>
      <button
        onClick={() => {
          dispatch("minus");
        }}
      >
        minus
      </button>
      <button
        onClick={() => {
          dispatch("multipy"());
        }}
      >
        multipy{" "}
      </button>
      <br></br>
      <br></br>
      <br></br>
      {state}
    </>
  );
};

export default Test;
