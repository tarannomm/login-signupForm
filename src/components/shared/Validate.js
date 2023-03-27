export const validate = (data, type) => {
  const errors = {};

  // email validation
  if (!data.email.trim()) {
    errors.email = "email required!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email is not valid!";
  } else {
    delete errors.email;
  }
  //password validation
  if (!data.pass) {
    errors.password = "password required!";
  } else if (data.pass.length < 6) {
    errors.password = "password must be 6 charecter or more!";
  } else {
    delete errors.password;
  }

  if (type === "signUp") {
    //name validation
    if (!data.name.trim()) {
      errors.name = "username required!";
    } else {
      delete errors.name;
    }
    //confirmPassword validation
    if (!data.confirm) {
      errors.confirmPassword = "confirm your password!";
    } else if (data.confirm !== data.pass) {
      errors.confirmPassword = "password do not matched!";
    } else {
      delete errors.confirmPassword;
    }

    //checkBox validation
    if (data.check) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our regulations!";
    }
  }
  return errors;
};
