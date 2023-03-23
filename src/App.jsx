import { Component } from "react";
import AddToDo from "./AddToDo";
import ShowAllToDo from "./ShowAllToDo";
import "./stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    let toDo;
    let localStorageToDos = JSON.parse(window.localStorage.getItem("toDo"));
    if (localStorageToDos) {
      toDo = localStorageToDos;
    } else {
      toDo = ["Wake up", "Breakfast", "Get ready", "Office"];
    }

    this.state = { toDo };
  }

  addToToDo = (newToDo) => {
    this.setState(
      (oldState) => {
        let newArr = [...oldState.toDo, newToDo];
        return { toDo: newArr };
      },
      () => {
        window.localStorage.setItem("toDo", JSON.stringify(this.state.toDo));
      }
    );
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
