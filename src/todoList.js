import React, { useState } from "react";

function TodoList() {
  const [ toDos, setToDos ] = useState([]);

  const onClick = () => {
    // 코드 분할
    import("./todo.js").then(({ Todo }) => {
      const position = toDos.length + 1;
      const newTodo = <Todo key={position} title={`할 일 ${position}`} />;
      setToDos([...toDos, newTodo]);
    });
  };

  return (
    <div>
      <button onClick={onClick}>할 일 추가</button>
      {toDos}
    </div>
  );
}

export default TodoList;