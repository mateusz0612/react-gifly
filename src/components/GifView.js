import React, { useEffect, useReducer, useCallback } from "react";
import { apiKey } from "./ApiKey";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BiSad } from "react-icons/bi";
import "../css/GifView.css";

const GifView = () => {
  const { id } = useParams();

  const initialState = {
    item: [],
    isLoading: true,
    isError: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_ITEM":
        return { ...state, item: action.payload };
      case "SET_LOADING":
        return { ...state, isLoading: false };
      case "SET_ERROR":
        return { ...state, isError: true };
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const getGif = useCallback(async () => {
    const response = await axios({
      method: "get",
      url: `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}
      `,
    }).catch((e) => {
      if (e.response) {
        dispatch({ type: "SET_LOADING" });
        dispatch({ type: "SET_ERROR" });
      }
    });
    if (response !== undefined) {
      const data = response.data.data;
      dispatch({ type: "SET_ITEM", payload: data });
      dispatch({ type: "SET_LOADING" });
    }
  }, [id]);

  useEffect(() => {
    getGif();
  }, [getGif]);

  if (state.isLoading) {
    return (
      <section className="wrapper">
        <div className="loader"></div>
      </section>
    );
  }

  const { title, url, import_datetime } = state.item;

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
      <article className="gif_view">
        <h1>Title: {title || "No title given"}</h1>
        <img src={state.item.images.original.url} alt="" />
        <div className="gif_view_info">
          <p>
            See at GIPHY: <a href={url}>SEE</a>
          </p>
          <p>Added: {import_datetime}</p>
        </div>
        {state.item.user ? (
          <article className="user_info">
            <img
              src={state.item.user.avatar_url}
              alt=""
              className="user_avatar"
            />
            <div className="user_info_container">
              <p>Added by: {state.item.user.username}</p>
              <p>
                See user at GIPHY: <a href={state.item.user.profile_url}>SEE</a>
              </p>
            </div>
          </article>
        ) : (
          <article className="user_info">
            <p>No info about user</p>
          </article>
        )}
      </article>
      <footer>
        <p className="info">
          Gif loading may take some time. Please be patient.
        </p>
      </footer>
    </main>
  );
};

export default GifView;
