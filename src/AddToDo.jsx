import { Component } from "react";
import "./stylesheets/AddToDo.css";

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
        <input
          type="text"
          value={this.state.formInput}
          onChange={this.changeFormInput}
        />
        <input type="submit" value="Add To-Do" />
      </form>
    );
  };
}

export default AddToDo;
