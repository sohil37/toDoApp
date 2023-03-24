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

class ShowAllToDo extends Component {
  render = () => {
    return (
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
                          this.props.openEditToDo(index);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          this.props.removeToDo(index);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemText>{elem}</ListItemText>
                </ListItem>
                <Divider />
              </Box>
            );
          })}
        </List>
      </Paper>
    );
  };
}

export default ShowAllToDo;
