import React, { useState } from "react";
import Card from "../UI/Card";
import addUserStyle from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length > 0 &&
      enteredAge.trim().length > 0 &&
      +enteredAge > 1
    ) {
      props.onAddUser(enteredUserName, enteredAge);
      setEnteredUserName("");
      setAge("");
    }
  };

  const userNameChnageHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const ageChnageHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={addUserStyle.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={userNameChnageHandler}
          value={enteredUserName}
        ></input>
        <label htmlFor="age">Age (years)</label>
        <input
          id="username"
          type="number"
          onChange={ageChnageHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
