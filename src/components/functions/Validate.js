export const validate = (data, type) => {
  const errors = {};

  // email validation
  if (!data.email.trim()) {
    errors.email = "email required!!";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email is not valid!!";
  } else {
    delete errors.email;
  }
  //password validation
  if (!data.password) {
    errors.password = "password required!!";
  } else if (data.password.length < 6) {
    errors.password = "password must be 6 charecter or more";
  } else {
    delete errors.password;
  }

  if (type === "signUp") {
    //name validation
    if (!data.name.trim()) {
      errors.name = "username required!!";
    } else {
      delete errors.name;
    }
    //confirmPassword validation
    if (!data.confirmPassword) {
      errors.confirmPassword = "confirm your password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password do not matched!!";
    } else {
      delete errors.confirmPassword;
    }

    //checkBox validation
    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our regulations";
    }
  }
  return errors;
};
