import { Component } from "react";
import "./stylesheets/ShowAllToDo.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Paper, Box } from "@mui/material";
class ShowAllToDo extends Component {
  render = () => {
    return (
      <Paper className="ShowAllToDo">
        <List>
          {this.props.toDos.map((elem, index) => {
            return (
              <Box key={index}>
                <ListItem>
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
