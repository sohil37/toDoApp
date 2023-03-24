import React, { Component } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";

class EditDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { editedToDo: this.props.editDialog.toDo };
  }

  handleEdit = (e) => {
    this.setState(() => {
      return { editedToDo: e.target.value };
    });
  };

  render() {
    return (
      <>
        <Dialog open={this.props.editDialog.openDialog} disableEscapeKeyDown>
          <DialogContent>
            <TextField
              type="text"
              value={this.state.editedToDo}
              onChange={this.handleEdit}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.closeEditDialog}>Cancel</Button>
            <Button
              onClick={() => {
                this.props.updateToDo(
                  this.state.editedToDo,
                  this.props.editDialog.index
                );
              }}
            >
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default EditDialog;
