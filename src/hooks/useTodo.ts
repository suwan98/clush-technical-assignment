import {useState} from "react";
import {Todo} from "./../types/Todo";
import {v4 as uuid} from "uuid";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  /* 할일 필터링을 위한 필터 상태 */
  const [filter, setFilter] = useState<"all" | "completed">("all");

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

  /* 할일을 필터링하는 함수 */
  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  return {
    todos: filteredTodos(),
    setTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
  };
};

export default useTodo;
