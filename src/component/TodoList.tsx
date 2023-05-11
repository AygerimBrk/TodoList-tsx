import { useEffect, useState } from "react";
import { useAppSelector } from "../helpers";
import DoneItem from "./DoneTodo";
import TodoItem from "./Todo";
import { useDispatch } from "react-redux";
import { fetchTodo } from "../todo/todo";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  //   const todoList = useSelector(selectTodoList);
  const dispatchThunk = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  useEffect(() => {
    dispatchThunk(fetchTodo())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  const todos = useAppSelector((state) => state.todos.list);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "344px",
          height: "min-content",
          backgroundColor: "#32435f",
          padding: "0 20px",
          borderRadius: "10px",
          marginRight: "10px",
        }}
      >
        <h2 style={{ color: "white" }}>Doing : </h2>

        {todos.map((todo: Todo) => {
          if (!todo.completed) {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TodoItem key={todo.id} {...todo} />
              </div>
            );
          }
        })}
      </div>
      <div
        style={{
          backgroundColor: "#8f8681",
          width: "330px",
          height: "min-content",
          padding: "0 20px",
          borderRadius: "10px",
          marginLeft: "10px",
        }}
      >
        <h2 style={{ color: "white" }}>Done : </h2>

        {todos.map((todo: Todo) => {
          if (todo.completed) {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <DoneItem key={todo.id} {...todo} />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;
