import { useState } from "react";
import { useAppDispatch } from "../helpers";
import { toggleComplete, removeTodo, editTodo } from "../todo/todo";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const DoneTodo: React.FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title); // new state variable to hold the edited title
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const handleSaveChanges = () => {
    dispatch(editTodo({ id, title: editedTitle }));
    setOpen(false);
  };

  return (
    <div
      className="qq"
      style={{
        width: "25vw",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch(toggleComplete(id))}
        />
        <span style={{ color: "white" }}>{title}</span>
      </div>
      <div>
        <span style={{ color: "white" }} onClick={() => setOpen(true)}>
          <ModeEditIcon />
        </span>
        <span className="delete" onClick={() => dispatch(removeTodo(id))}>
          <DeleteIcon />
        </span>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Update
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                value={editedTitle}
                onChange={handleTitleChange}
              />
              <button onClick={handleSaveChanges}>Save</button>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default DoneTodo;
