import { Component } from "react";
import "./stylesheets/ShowAllToDo.css";
import {
  Paper,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
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
          {this.props.toDos.length > 0 ? (
            <List>
              {this.props.toDos.map((elem, index) => {
                return (
                  <Box key={index}>
                    <ListItem>
                      <ListItemText>{elem}</ListItemText>
                      <ListItemIcon>
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
                      </ListItemIcon>
                    </ListItem>
                    <Divider />
                  </Box>
                );
              })}
            </List>
          ) : (
            <Box className="no-to-do-msg">
              <Typography paragraph={true}>No To-Do to display</Typography>;
            </Box>
          )}
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
