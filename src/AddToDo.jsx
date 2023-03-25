import { Component } from "react";
import "./stylesheets/AddToDo.css";
import { TextField, Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";

class AddToDo extends Component {
  constructor(props) {
    super(props);

    // Initialize AddToDo Component state
    this.state = { formInput: "" };
  }

  // Function to handle change in form input
  handleFormInput = (e) => {
    this.setState(() => {
      return { formInput: e.target.value };
    });
  };

  // Function to submit form and Add todo in the state of App Component
  submitForm = (e) => {
    e.preventDefault();
    this.props.addToDoFunction(this.state.formInput);
    this.setState(() => {
      return { formInput: "" };
    });
  };

  // Function to render AddToDo Component
  render = () => {
    return (
      <StyledEngineProvider>
        <form className="AddToDo" onSubmit={this.submitForm}>
          <TextField
            type="text"
            value={this.state.formInput}
            onChange={this.handleFormInput}
            placeholder="Add todo here"
            className="todo-textfield"
            multiline
            maxRows={4}
          />
          <Button type="submit" variant="outlined">
            Add To-Do
          </Button>
        </form>
      </StyledEngineProvider>
    );
  };
}

export default AddToDo;
