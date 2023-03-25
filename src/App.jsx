import { Component } from "react";
import AddToDo from "./AddToDo";
import ShowAllToDo from "./ShowAllToDo";
import "./stylesheets/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // Initialize App Component state and browser local storage
    let localStorageToDos = JSON.parse(window.localStorage.getItem("toDo"));
    let toDo;

    if (localStorageToDos) {
      toDo = localStorageToDos;
    } else {
      toDo = [];
      window.localStorage.setItem("toDo", JSON.stringify(toDo));
    }

    this.state = { toDo };
  }

  // Function to add todo to App Component state and browser local storage
  addToDo = (newToDo) => {
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

  // Function to edit todo in App Component state and browser local storage
  editToDo = (editedToDo, toDoIndex) => {
    try {
      this.setState(
        (oldState) => {
          let newArr = [...oldState.toDo];
          newArr.splice(toDoIndex, 1, editedToDo);
          return {
            toDo: newArr,
          };
        },
        () => {
          window.localStorage.setItem("toDo", JSON.stringify(this.state.toDo));
        }
      );
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  // Function to remove todo from App Component state and browser local storage
  removeToDo = (index) => {
    this.setState(
      (oldState) => {
        let newArr = [...oldState.toDo];
        newArr.splice(index, 1);
        return { toDo: newArr };
      },
      () => {
        window.localStorage.setItem("toDo", JSON.stringify(this.state.toDo));
      }
    );
  };

  // Method to render App Component
  render = () => {
    return (
      <div className="App">
        <AddToDo addToDoFunction={this.addToDo} />
        <ShowAllToDo
          toDos={this.state.toDo}
          editToDoFunction={this.editToDo}
          removeToDoFunction={this.removeToDo}
        />
      </div>
    );
  };
}

export default App;
