import React from "react";
import ReactDom from "react-dom";
import LikeButton from "./LikeButton";
import TodoList from "./todoList";

function Container() {
  return (
    <div>
      <LikeButton />
      <LikeButton />
      <button>{"123".padStart(5, "0")}</button>
      <TodoList />
    </div>
  );
}

const domContainer = document.querySelector("#react-root");
ReactDom.render(<Container />, domContainer);
