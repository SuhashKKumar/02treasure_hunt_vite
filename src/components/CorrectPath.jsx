import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "../styles/CorrectPath.css";
import ParticlesComponent from "../Utils/Particles";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import Buttons from "./Buttons";
import FeedbackForm from "./FeedbackForm";

const CorrectPath = () => {
  const [form, setForm] = useState(false);
  const FormHandler = () => {
    setForm(!form);    
  };
  const navigate = useNavigate();
  const NavigateToHome = () => {
    navigate("/");
  };
  return (
    <div className="treasure_path">
    <FeedbackForm form={form} setForm={setForm} />
      <h1>Hurry</h1>
      <h2> The treasure is all yours</h2>
      <div className="buttons_container">
        <Button onClick={NavigateToHome}>Home</Button>
        <Buttons CookiesHandler={FormHandler} name={"Contact Developer"} />
      </div>
      <ParticlesComponent />
      <Footer />
    </div>
  );
};

export default CorrectPath;
