import React, { useState, useReducer } from "react";
import GifList from "./GifList";
import "../css/SearchGif.css";

const SearchGif = () => {
  const initialState = {
    items: [],
    isLoading: true,
    isError: false,
    query: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ITEMS":
        return { ...state, items: action.payload };
      case "SET_LOADING":
        return { ...state, isLoading: false };
      case "SET_ERROR":
        return { ...state, isError: true };
      case "SET_QUERY":
        return { ...state, query: action.payload };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <section className="form-wrapper">
        <form>
          <label htmlFor="query">Entery query:</label>
          <input type="text" value={state.query} name="query" id="query" />
        </form>
      </section>
      <section className="wrapper"></section>
    </React.Fragment>
  );
};

export default SearchGif;
