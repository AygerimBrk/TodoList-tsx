import { Box, Button, TextField } from "@mui/material";
import { useAppSelector } from "../helpers";

interface NewTodoProps {
  value: string;
  updateText: (str: string) => void;
  handleAction: () => void;
}

const NewTodo: React.FC<NewTodoProps> = ({
  value,
  updateText,
  handleAction,
}) => {
  const todos = useAppSelector((state) => state.todos.list);

  return (
    <div
      style={{
        width: "50%",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: " 20px auto 0",
        paddingBottom: "30px",
      }}
    >
      <header>
        <h2>To do List with Typescript</h2>
      </header>

      <div>
        <TextField
          size="small"
          label="new todo"
          value={value}
          sx={{ width: "400px", marginRight: "20px", borderColor: "black" }}
          onChange={(e) => updateText(e.target.value)}
        />
        <Button
          sx={{ fontFamily: "inherit", color: "black" }}
          onClick={handleAction}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default NewTodo;
