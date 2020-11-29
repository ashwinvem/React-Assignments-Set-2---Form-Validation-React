import React, { useState } from "react";

function Form() {
  const [formDetails, setformDetailss] = useState({
    errorMsg: "",
    username: null,
    noError: false,
    name: "",
    email: "",
    gender: "male",
    mobileNumber: "",
    password: ""
  });

  const checkForAlphanumeric = (name) => {
    let alphaNumeric = "^[a-zA-Z0-9_]*$";
    if (alphaNumeric.test(name)) {
      return true;
    }
    return false;
  };

  const getUsrename = (nmae) => {
    let username = nmae.email.split("@")[0];
    console.log(username);
    return username;
  };

  const handelValueChange = (value, key) => {
    let newformDetails = { ...formDetails };
    newformDetails[key] = value;
    setformDetailss(newformDetails);
  };

  const handelClick = () => {
    let newformDetails = { ...formDetails };

    if (
      formDetails.name === "" ||
      formDetails.email === "" ||
      formDetails.phoneNumber === "" ||
      formDetails.password === ""
    ) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "All fields are mandatory";
    } else if (checkForAlphanumeric(formDetails.name)) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "Name is not alphanumeric";
    } else if (!formDetails.email.includes("@")) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "Email must contain @";
    } else if (
      formDetails.gender !== "male" &&
      formDetails.gender !== "female" &&
      formDetails.gender !== "other"
    ) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "Please identify as male, female or others";
    } else if (isNaN(formDetails.phoneNumber)) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "Phone Number must contain only numbers";
    } else if (formDetails.password.length < 6) {
      newformDetails.noError = false;
      newformDetails.errorMessage = "Password must contain atleast 6 letters";
    } else {
      newformDetails.noError = true;
      newformDetails.errorMessage = null;
    }

    newformDetails.username = getUsrename(formDetails);

    setformDetailss(newformDetails);
  };

  return (
    <div id="main_section">
      <div className="formContainer">
        <label className="label" for="name">
          Name
        </label>
        <input
          type="text"
          data-testid="name"
          value={formDetails.name}
          onChange={(event) => handelValueChange(event.target.value, "name")}
        />

        <label className="label" for="email">
          email
        </label>
        <input
          type="text"
          data-testid="email"
          value={formDetails.email}
          onChange={(event) => handelValueChange(event.target.value, "email")}
        />

        <label className="label" for="gender">
          gender
        </label>
        <input
          type="text"
          value={formDetails.gender}
          data-testid="gender"
          onChange={(event) => handelValueChange(event.target.value, "gender")}
        />

        <label className="label" for="phoneNumber">
          Phone Number
        </label>
        <input
          type="text"
          data-testid="phoneNumber"
          value={formDetails.phoneNumber}
          onChange={(event) =>
            handelValueChange(event.target.value, "phoneNumber")
          }
        />

        <label className="label" for="password">
          password
        </label>
        <input
          type="password"
          data-testid="password"
          value={formDetails.password}
          onChange={(event) =>
            handelValueChange(event.target.value, "password")
          }
        />

        <button data-testid="submit" onClick={handelClick}>
          Submit
        </button>
      </div>

      {formDetails.noError && <div>Hello {formDetails.username}</div>}
      {!formDetails.noError && <div>{formDetails.errorMessage}</div>}
    </div>
  );
}

export default Form;
