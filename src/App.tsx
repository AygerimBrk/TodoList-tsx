import { useEffect, useState } from "react";
import { useAppDispatch } from "./helpers";

import { addTodo, fetchTodo } from "./todo/todo";
import NewTodo from "./component/NewTodo";
import TodoList from "./component/TodoList";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="App">
      <NewTodo value={text} updateText={setText} handleAction={handleAction} />
      <TodoList />
    </div>
  );
}

export default App;
