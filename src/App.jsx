import { Component } from "react";
import AddToDo from "./AddToDo";
import EditDialog from "./EditDialog";
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
      toDo = [];
      window.localStorage.setItem("toDo", JSON.stringify(toDo));
    }
    EditDialog;

    this.state = {
      toDo,
      editDialog: { openDialog: false, index: null, toDo: null },
    };
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

  openEditToDo = (index) => {
    this.setState(() => {
      return {
        editDialog: { openDialog: true, index, toDo: this.state.toDo[index] },
      };
    });
  };

  closeEditDialog = () => {
    this.setState(() => {
      return { editDialog: { openDialog: false, index: null, toDo: null } };
    });
  };

  updateToDo = (editedToDo, toDoIndex) => {
    this.setState(
      (oldState) => {
        let newArr = [...oldState.toDo];
        newArr.splice(toDoIndex, 1, editedToDo);
        return {
          toDo: newArr,
          editDialog: { openDialog: false, index: null, toDo: null },
        };
      },
      () => {
        window.localStorage.setItem("toDo", JSON.stringify(this.state.toDo));
      }
    );
  };

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

  render = () => {
    return (
      <div className="App">
        <AddToDo addToDoFunction={this.addToToDo} />
        <ShowAllToDo
          toDos={this.state.toDo}
          removeToDo={this.removeToDo}
          openEditToDo={this.openEditToDo}
        />
        {this.state.editDialog.openDialog === true ? (
          <EditDialog
            closeEditDialog={this.closeEditDialog}
            editDialog={this.state.editDialog}
            updateToDo={this.updateToDo}
          />
        ) : (
          <></>
        )}
      </div>
    );
  };
}

export default App;
