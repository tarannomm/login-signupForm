import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/css/forms.module.css";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { validate } from "./functions/Validate";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    pass: "",
    confirm: "",
    check: false,
  });
  const[touch,setTouch]=useState({});
  const changeHandler = event =>{
    if(event.target.id==="check"){
      setData({...data,[event.target.id]:event.target.checked});
    }
    else{
      setData({...data,[event.target.id]:event.target.value});
    }
  }
  const errors=validate(data,"signUp");
  const focusHandler=(event)=>{
    setTouch({...touch,[event.target.id]:true})
  }
  
  return (
    <form className={styles.container}>
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
            <input type="text" id="name" name="name" value={data.name} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.name && touch.name && <span>{errors.name}</span>}
          </div>
          <div className={styles.emailContainer}>
            <label htmlFor="email">
              <AiOutlineMail /> email
            </label>
              <input type="text" id="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.email && touch.email && <span>{errors.email}</span>}
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="pass" className={styles.labels}>
              <RiLockPasswordLine /> password
            </label>
            <input type="password" id="pass" value={data.pass} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.password && touch.pass && <span>{errors.password}</span>}
          </div>
          <div className={styles.confirmPassContainer}>
            <label htmlFor="confirm">
              <GiConfirmed /> confirm password
            </label>
            <input type="password" id="confirm" value={data.confirm} onChange={changeHandler} onFocus={focusHandler}/>
            {errors.confirmPassword && touch.confirm && <span>{errors.confirmPassword}</span>}
          </div>
          <div className={styles.checkContainer}>
            
            <label htmlFor="check">
              I accept all the terms of privacy policy{" "}
            </label>
            <input type="checkbox" id="check" value={data.check} onChange={changeHandler} onFocus={focusHandler}/>
             
            {errors.isAccepted && touch.check && <span>{errors.isAccepted}</span>}
          </div>
        </div>
        <button>sign up</button>
      </div>
    </form>
  );
};

export default Signup;
