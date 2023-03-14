import { Component } from "react";
import AddToDo from "./AddToDo";
import ShowAllToDo from "./ShowAllToDo";
import "./stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { toDo: ["Wake up", "Breakfast", "Get ready", "Office"] };
  }

  addToToDo = (newToDo) => {
    this.setState((oldState) => {
      let newArr = [...oldState.toDo, newToDo];
      return { toDo: newArr };
    });
  };

  render = () => {
    return (
      <div className="App">
        <AddToDo addToDoFunction={this.addToToDo} />
        <ShowAllToDo toDos={this.state.toDo} />
      </div>
    );
  };
}

export default App;
