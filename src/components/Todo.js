import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Todo = () => {
  const classes = useStyles();

  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Book Flight",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Book Train",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Learn React js",
      isCompleted: true,
    },
  ]);

  const handleChange = (e) => {
    //console.log(e.target.value);
    setTodoText(e.target.value);
  };

  const AddTodo = (e) => {
    const newTodo = {
      id: uuidv4(),
      text: todoText,
      isCompleted: false,
    };

    setTodos([newTodo, ...todos]);
    setTodoText("");
  };

  //   const CheckBoxExample = () => {
  //     const [checked, setChecked] = useState(true);
  //     return (
  //       <div>
  //         <FormControlLabel
  //           control={
  //             <Checkbox
  //               checked={checked}
  //               onChange={(e) => setChecked(e.target.checked)}
  //               inputProps={{ "aria-label": "secondary checkbox" }}
  //             />
  //           }
  //         />
  //       </div>
  //     );
  //   };

  const completedTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id == id) {
        todo.isCompleted = !todo.isCompleted;
        return todo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deletedTodo = (id) => {
    const deletedTodos = todos.filter((data) => data.id != id);
    setTodos(deletedTodos);
  };

  return (
    <div className="card shadow">
      <div className="card-body">
        <div className="card-header">
          <TextField
            variant="outlined"
            color="secondary"
            type="text"
            value={todoText}
            onChange={(e) => handleChange(e)}
            label="Todo"
            placeholder="Add Your Todo..."
          />
          <Button
            variant="contained"
            color="secondary"
            disabled={!todoText}
            onClick={AddTodo}
            className={classes.button}
            startIcon={<AddCircleOutlineRoundedIcon style={{ fontSize: 30 }} />}
          >
            ADD
          </Button>
        </div>
        <ul className="list-group list-group-flush">
          {todos.map((todo) => {
            return (
              <li
                className="list-group-item styleItem d-flex justify-content-between"
                key={todo.id}
              >
                <Checkbox
                  checked={todo.isCompleted}
                  inputProps={{ "aria-label": "primary checkbox" }}
                  onChange={() => completedTodo(todo.id)}
                />

                <span className={todo.isCompleted ? `completed` : null}>
                  {todo.text}
                </span>
                <DeleteOutlineIcon onClick={() => deletedTodo(todo.id)} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
