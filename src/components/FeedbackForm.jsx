import React, { useState, useRef, useEffect } from "react";
import "../styles/FeedbackForm.css";
import Buttons from "./Buttons";
import { db } from "../Utils/Firebase";
import { addDoc, collection } from "firebase/firestore";

const FeedbackForm = ({ form, setForm }) => {
  const defaultFormFields = {
    fullName: "",
    message: "",
    email: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { fullName, message, email } = formFields;
  const feedbackCollection = collection(db, "contacts");

  const FormHandler = () => {
    if (fullName && message && email) {
      addDoc(feedbackCollection, {
        fullName: fullName,
        email: email,
        message: message,
      })
        .then(() => {
          alert("Thanks for the feedback");
        })
        .catch((error) => {
          alert(error.message);
        });
      setFormFields(defaultFormFields);
      setForm(!form);
    } else {
      alert("please fill the fields");

    }
  };
  const closeHandler=()=>{
    setForm(!form);
  }
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const styles = {
    forms: {
      display: form ? "flex" : "none",
      opacity: form ? "1" : "0",
    },
  };
  return (
    <div className="form_container" style={styles.forms}>
      <div className="form">
        <h3>Feedback Form</h3>
        <input
          placeholder="Name"
          onChange={changeHandler}
          value={fullName}
          name="fullName"
          type="text"
          autoComplete="off"
        />
        <input
          placeholder="Email"
          onChange={changeHandler}
          value={email}
          name="email"
          type="email"
          autoComplete="off"
        />
        <textarea
          autoComplete="off"
          placeholder="Message"
          onChange={changeHandler}
          value={message}
          name="message"
          type="text-area"
          rows="4"
          cols="50"
        />
        <div className="buttons_container" >
        <Buttons name="Close" CookiesHandler={closeHandler} />
        <Buttons name="Submit Feedback" CookiesHandler={FormHandler} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
