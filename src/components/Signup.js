import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/css/forms.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { validate } from "./shared/Validate";
import { notify } from "./shared/toast";
import { ToastContainer } from "react-toastify";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    confirm: "",
    check: false,
  });
  const [touch, setTouch] = useState({});
  const changeHandler = (event) => {
    if (event.target.id === "check") {
      setData({ ...data, [event.target.id]: event.target.checked });
    } else {
      setData({ ...data, [event.target.id]: event.target.value });
    }
  };
  const errors = validate(data, "signUp");
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.id]: true });
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    if(Object.keys(errors).length){
      setTouch({
        name:true,
        email:true,
        pass:true,
        confirm:true,
        check:true
      })
      notify("error","please complete all of informatin");
    }
    else{
    notify("success", "your account is created!!")
    }
  }

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <div className={styles.imgContainer}>
        <h1>Welcome!!</h1>
        <p>
          If you already have an account, You can enter your account using your
          personal information!
        </p>
        <Link to="/login">sign in</Link>
      </div>
      <div className={styles.formContainer}>
        <h2>Create Account</h2>
        <div className={styles.infoContainer}>
          <div className={styles.nameContainer}>
            <label htmlFor="name">
              <BsPersonCircle /> name
            </label>
            <input
              className={
                errors.name
                  ? touch.name && styles.errorInput
                  : styles.correctInput
              }
              type="text"
              id="name"
              name="name"
              value={data.name}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <span>{errors.name && touch.name && errors.name}</span>
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="email">
              <AiOutlineMail /> email
            </label>
            <input
              className={
                errors.email
                  ? touch.email && styles.errorInput
                  : styles.correctInput
              }
              type="text"
              id="email"
              value={data.email}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <span>{errors.email && touch.email && errors.email}</span>
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="pass" >
              <RiLockPasswordLine /> password
            </label>
            <input
              className={
                errors.password
                  ? touch.pass && styles.errorInput
                  : styles.correctInput
              }
              type="password"
              id="pass"
              value={data.pass}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <span>{errors.password && touch.pass && errors.password}</span>
          </div>
          <div className={styles.confirmPassContainer}>
            <label htmlFor="confirm">
              <GiConfirmed /> confirm password
            </label>
            <input
              className={
                errors.confirmPassword
                  ? touch.confirm && styles.errorInput
                  : styles.correctInput
              }
              type="password"
              id="confirm"
              value={data.confirm}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
            <span>
              {errors.confirmPassword &&
                touch.confirm &&
                errors.confirmPassword}
            </span>
          </div>
          <div className={styles.checkContainer}>
            <div className={styles.check}>
              <label htmlFor="check" >
                I accept all the terms of privacy policy{" "}
              </label>
              <input
                type="checkbox"
                id="check"
                value={data.check}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div> 
            <span>{errors.isAccepted && touch.check && errors.isAccepted}</span>
          </div>
        </div>
        <button type="submit">sign up</button>
      </div>
      <ToastContainer/>
    </form>
  );
};

export default Signup;
