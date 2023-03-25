import { Component } from "react";
import "./stylesheets/ShowAllToDo.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditDialog from "./EditDialog";

class ShowAllToDo extends Component {
  constructor(props) {
    super(props);

    // Initialize state of ShowAllToDo Component
    this.state = {
      editDialogProps: { openDialog: false, toDoIndex: null, toDo: null },
    };
  }

  // Function to trigger EditDialog Component to open
  openEditDialog = (index) => {
    this.setState(() => {
      return {
        editDialogProps: {
          openDialog: true,
          toDoIndex: index,
          toDo: this.props.toDos[index],
        },
      };
    });
  };

  // Function to trigger EditDialog Component to close
  closeEditDialog = () => {
    this.setState(() => {
      return {
        editDialogProps: { openDialog: false, toDoIndex: null, toDo: null },
      };
    });
  };

  // Function to render ShowAllToDo Component
  render = () => {
    return (
      <>
        <Paper className="ShowAllToDo">
          <List>
            {this.props.toDos.map((elem, index) => {
              return (
                <Box key={index}>
                  <ListItem
                    secondaryAction={
                      <>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => {
                            this.openEditDialog(index);
                          }}>
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => {
                            this.props.removeToDoFunction(index);
                          }}>
                          <DeleteIcon />
                        </IconButton>
                      </>
                    }>
                    <ListItemText>{elem}</ListItemText>
                  </ListItem>
                  <Divider />
                </Box>
              );
            })}
          </List>
        </Paper>
        {this.state.editDialogProps.openDialog === true ? (
          <EditDialog
            closeEditDialog={this.closeEditDialog}
            editToDoFunction={this.props.editToDoFunction}
            editDialogProps={this.state.editDialogProps}
          />
        ) : (
          <></>
        )}
      </>
    );
  };
}

export default ShowAllToDo;
