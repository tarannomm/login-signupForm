import React from "react";
import styles from "../styles/css/forms.module.css";
 import {BsPersonCircle} from "react-icons/bs";
 import {AiOutlineMail,AiFillGooglePlusCircle} from "react-icons/ai";
 import {RiLockPasswordLine} from "react-icons/ri";
 import {GiConfirmed} from "react-icons/gi";
 
const Signup = () => {
  return (
      <form className={styles.container}>
        <div className={styles.imgContainer}>
          <h1>Welcome!!</h1>
          <p>
            If you already have an account, You can enter your account using
            your personal information!
          </p>
          <button>sign in</button>
        </div>
        <div className={styles.formContainer}>
          <h2>Create Account</h2>
          <div className={styles.infoContainer}>
          <div className={styles.nameContainer}>
            <label for="name"><BsPersonCircle/> name</label>
            <input type="text" id="name"/>
          </div>
          <div className={styles.emailContainer}>
            <label for="email"><AiOutlineMail/> email</label>
            <input type="text" id="email"/>
          </div>
          <div className={styles.passwordContainer}>
            <label for="pass" className={styles.labels}><RiLockPasswordLine/> password</label>
            <input type="password" id="pass"/>
          </div>
          <div className={styles.confirmPassContainer}>
            <label for="confirm"><GiConfirmed/> confirm password</label>
            <input type="password" id="confirm" />
          </div>
          <div className={styles.checkContainer}>
            <label for="check">I accept all the terms of privacy policy </label>
            <input type="checkbox" id="check" />
          </div>
        </div>
        <button>sign up</button></div>
        <AiFillGooglePlusCircle/>
      </form>
    
  );
};

export default Signup;
