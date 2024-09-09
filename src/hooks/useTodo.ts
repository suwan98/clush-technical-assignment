import {useState} from "react";
import {Todo} from "./../types/Todo";
import {v4 as uuid} from "uuid";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /* 할일을 추가하는 함수 */
  const addTodo = (text: string) => {
    setTodos((prev) => [...prev, {id: uuid(), text, completed: false}]);
  };

  /* 할일을 삭제하는 함수 */
  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /* 할일을 토글하는 함수 */
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};

export default useTodo;
