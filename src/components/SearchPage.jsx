import React from "react";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/HomePage.css";
import Button from "./Buttons";
import Footer from "./Footer";

const SearchPage = (props) => {
  
    const [name, setName] = useState("");
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setName(e.target.value);
  };
  const SearchHandler = () => {
    // props.onSearch(name);
    name === ""
      ? alert("please enter")
      : name === "here"
      ? navigate("here")
      : navigate("*");
    setName("");
  };
  return (
    <div className="homepage_parent">
      <div className="homepage">
        <div className="homepage">
          <h1 className="homepage_title">The treasure is here</h1>
          <h4>Search with our team members FirstName to find the treasure</h4>
          <input
            placeholder="Search & Enter"
            onChange={changeHandler}
            value={name}
            type="text"
          />
        </div>
        <Button
          className={"contained"}
          name={"Begin hunt"}
          CookiesHandler={SearchHandler}
        />
      </div>
      <Footer />
      <Outlet />
    </div>
  );
};

export default SearchPage;
