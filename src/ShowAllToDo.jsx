import { Component } from "react";
import "./stylesheets/ShowAllToDo.css";

class ShowAllToDo extends Component {
  render = () => {
    return (
      <div className="ShowAllToDo">
        <ol>
          {this.props.toDos.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ol>
      </div>
    );
  };
}

export default ShowAllToDo;
