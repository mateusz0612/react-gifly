import React, { useState, useReducer, useEffect, useCallback } from "react";
import GifList from "./GifList";
import "../css/SearchGif.css";
import axios from "axios";
import { BiSad } from "react-icons/bi";
import { apiKey } from "./ApiKey";

const SearchGif = () => {
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

  const [query, setQuery] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = useCallback(async () => {
    const response = await axios({
      method: "get",
      url: `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=14`,
    }).catch((e) => {
      if (e.response) {
        console.log(e);
        dispatch({ type: "SET_LOADING" });
        dispatch({ type: "SET_ERROR" });
      }
    });
    if (response !== undefined) {
      const data = response.data.data;
      dispatch({ type: "SET_LOADING" });
      dispatch({ type: "SET_ITEMS", payload: data });
    }
  }, [query]);

  useEffect(() => {
    getData();
  }, [getData]);

  if (state.isLoading) {
    return (
      <section className="wrapper">
        <div className="loader"></div>
      </section>
    );
  }

  return (
    <React.Fragment>
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
      <section className="form-wrapper">
        <form>
          <label htmlFor="query">Enter query:</label>
          <input
            type="text"
            value={query}
            name="query"
            id="query"
            placeholder="e.g football"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </form>
      </section>
      <h1>Founded gifs:</h1>
      <GifList data={state.items} />
    </React.Fragment>
  );
};

export default SearchGif;
