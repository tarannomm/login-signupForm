import React ,{ useState }from "react";
import { Link } from "react-router-dom";
import styles from "../styles/css/forms.module.css";
import { AiOutlineMail, AiOutlineGooglePlus } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { notify } from "./shared/toast";
import { validate } from "./shared/Validate";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    pass: "",
  });
  const [touch, setTouch] = useState({});
  const changeHandler = (event) => {
    setData({ ...data, [event.target.id]: event.target.value });
  };

  const errors = validate(data, "login");
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.id]: true });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length) {
      setTouch({
        email: true,
        pass: true,
      });
      notify("error", "your information is incorrect!");
    } else {
      notify("success", "sign in is successfully!");
    }
  };

  return (
    <div>
      <form className={styles.container} style={{ flexDirection: "row" }} onSubmit={submitHandler}>
        <div
          className={styles.imgContainer}
          style={{ borderRadius: "5px 0 0 5px" }}
        >
          <h1>Welcome!!</h1>
          <p>
            If you have'nt any account, You can create your persional account!
          </p>
          <Link to="/signup">sign up</Link>
        </div>
        <div className={styles.formContainer}>
          <h2 style={{ margin: "25px" }}>Sign in</h2>
          <div className={styles.infoContainer}>
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
              <label htmlFor="pass" className={styles.labels}>
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
            <button type="submit">login </button>

            <button>
              <AiOutlineGooglePlus
                style={{
                  backgroundColor: "rgb(216, 216, 216)",
                  borderRadius: "50%",
                  color: "rgb(92, 21, 121)",
                  width: "20px",
                  height: "20px",
                  margin: "-4px 10px -3px 0",
                }}
              />
              with google 
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
