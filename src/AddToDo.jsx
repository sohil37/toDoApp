import { Component } from "react";
import "./stylesheets/AddToDo.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class AddToDo extends Component {
  constructor(props) {
    super(props);

    this.state = { formInput: "" };
  }

  changeFormInput = (e) => {
    this.setState(() => {
      return { formInput: e.target.value };
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.addToDoFunction(this.state.formInput);
    this.setState(() => {
      return { formInput: "" };
    });
  };

  render = () => {
    return (
      <form className="AddToDo" onSubmit={this.submitForm}>
        <TextField
          type="text"
          value={this.state.formInput}
          onChange={this.changeFormInput}
          placeholder="Add todo here"
        />
        <Button type="submit" variant="outlined">
          Add To-Do
        </Button>
      </form>
    );
  };
}

export default AddToDo;
