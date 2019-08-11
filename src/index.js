import React, { useState } from "react";
import ReactDom from "react-dom";
import LikeButton from "./LikeButton";
import TodoList from "./todoList";

const promise1 = (param) => {
  return new Promise((resolve, reject) => {
    if (param) {
      resolve("바보");
    } else {
      reject("천재");
    }
  });
};

function Container() {
  const [promiseRes, setPromiseRes] = useState("");

  function click(param) {
    promise1(param)
      .then((data) => setPromiseRes(data), (err) => setPromiseRes(err));
  }

  return (
    <div>
      <div>{process.env.MY_VARIABLE}</div>
      <button onClick={() => click(true)}>바보</button>
      <button onClick={() => click(false)}>천재</button>
      <div>Promise_1: {promiseRes}</div>
      <LikeButton />
      <LikeButton />
      <button>{"123".padStart(5, "0")}</button>
      <TodoList />
    </div>
  );
}

const domContainer = document.querySelector("#react-root");
ReactDom.render(<Container />, domContainer);
