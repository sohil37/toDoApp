import React, { Component } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  DialogActions,
} from "@mui/material";
import "./stylesheets/EditDialog.css";
import { StyledEngineProvider } from "@mui/material/styles";

class EditDialog extends Component {
  constructor(props) {
    super(props);

    // Initialize state of EditDialog Component
    this.state = { editedToDo: this.props.editDialogProps.toDo };
  }

  // Function to handle change in edit textfield
  handleEdit = (e) => {
    this.setState(() => {
      return { editedToDo: e.target.value };
    });
  };

  // Function to reset state of EditDialog Component
  resetState = () => {
    this.setState(() => {
      return { editedToDo: null };
    });
    this.props.closeEditDialog();
  };

  // Function to update the todo in the state of App Component with edited todo
  editToDoFunction = (editedToDo, toDoIndex) => {
    let isToDoEdited = this.props.editToDoFunction(editedToDo, toDoIndex);
    isToDoEdited
      ? this.resetState()
      : this.props.editToDoFunction(editedToDo, toDoIndex);
  };

  // Function to render EditDialog Component
  render() {
    return (
      <StyledEngineProvider>
        <Dialog
          open={this.props.editDialogProps.openDialog}
          disableEscapeKeyDown
          maxWidth={false}
          className="EditDialog">
          <DialogContent>
            <TextField
              type="text"
              value={this.state.editedToDo}
              onChange={this.handleEdit}
              fullWidth
              multiline
              maxRows={4}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeEditDialog}>Cancel</Button>
            <Button
              onClick={() => {
                this.editToDoFunction(
                  this.state.editedToDo,
                  this.props.editDialogProps.toDoIndex
                );
              }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </StyledEngineProvider>
    );
  }
}

export default EditDialog;
