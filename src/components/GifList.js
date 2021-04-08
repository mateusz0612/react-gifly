import React, { useReducer, useEffect } from "react";
import { BiSad } from "react-icons/bi";
import axios from "axios";
import "../css/GifList.css";

const GifList = () => {
  const initialState = {
    items: [],
    isLoading: true,
    isError: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ITEMS":
        return { ...state, items: action.payload };
      case "SET_LOADING":
        return { ...state, isLoading: false };
      case "SET_ERROR":
        return { ...state, isError: true };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    const response = await axios({
      method: "get",
      url: `https://api.giphy.com/v1/gifs/trending?api_key=tmf7Jc3lOhYC42tUvzsPix4bqRDx1FOz`,
    }).catch((err) => {
      if (err.response) {
        dispatch({ type: "SET_ERROR" });
      }
    });
    if (response !== undefined) {
      const data = response.data.data;
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_ITEMS", payload: data });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (state.isLoading) {
    return (
      <section className="wrapper">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <main>
      <article className="error">
        {state.isError ? (
          <React.Fragment>
            <h1>Couldn't load data from server. Please try again! </h1>
            <BiSad className="icon" />
          </React.Fragment>
        ) : (
          ""
        )}
      </article>
    </main>
  );
};

export default GifList;
