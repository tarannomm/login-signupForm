import React from "react";
import { Link} from "react-router-dom";
import styles from "../styles/css/forms.module.css";
 
 import {AiOutlineMail, AiOutlineGooglePlus } from "react-icons/ai";
 import {RiLockPasswordLine} from "react-icons/ri"; 

const Login = () => {
    return (
        <div>
             <form className={styles.container} style={{flexDirection:'row'}}>
        <div className={styles.imgContainer} style={{borderRadius:'5px 0 0 5px'}}>
          <h1>Welcome!!</h1>
          <p>
            If you have'nt any account, You can create your persional account!
          </p>
           <Link to="/signup">sign up</Link>
        </div>
        <div className={styles.formContainer}>
          <h2 style={{margin:'25px'}}>Sign in</h2>
          <div className={styles.infoContainer}>
          <div className={styles.emailContainer}>
            <label htmlFor="email"><AiOutlineMail/> email</label>
            <input type="text" id="email"/>
          </div>
          <div className={styles.passwordContainer}>
            <label htmlFor="pass" className={styles.labels}><RiLockPasswordLine/> password</label>
            <input type="password" id="pass"/>
          </div>
          <button>login </button>

          <button><AiOutlineGooglePlus style={{backgroundColor:"rgb(216, 216, 216)",borderRadius:'50%',color:'rgb(92, 21, 121)',width:'20px',height:'20px',margin:'-4px 10px -3px 0'}}/>with google </button>
        </div>
        
        </div>
        
        
      </form>  
        </div>
    );
};

export default Login;