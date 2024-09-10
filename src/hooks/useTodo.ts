import {useState, useCallback} from "react";
import {Todo} from "./../types/Todo";
import {v4 as uuid} from "uuid";
import {message, Modal} from "antd";

const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed">("all");

  /* 할일을 추가하는 함수 */
  const addTodo = useCallback(
    (text: string) => {
      const trimmedText = text.trim();
      if (trimmedText === "") {
        message.warning("할 일 내용을 입력해주세요.");
        return;
      }

      /* 중복 검사 */
      if (
        todos.some(
          (todo) => todo.text.toLowerCase() === trimmedText.toLowerCase()
        )
      ) {
        message.error("이미 존재하는 할 일입니다.");
        return;
      }

      setTodos((prev) => [
        ...prev,
        {id: uuid(), text: trimmedText, completed: false},
      ]);
      message.success("새로운 할 일이 추가되었습니다.");
    },
    [todos]
  );

  /* 할일을 삭제하는 함수 */
  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  /* 할일을 토글하는 함수 */
  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      )
    );
  }, []);

  /* 할일을 필터링하는 함수 */
  const filteredTodos = useCallback(() => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  /* 할일 전체 삭제 함수 */
  const clearAllTodos = useCallback(() => {
    Modal.confirm({
      title: "모든 할 일을 삭제하시겠습니까?",
      content: "이 작업은 되돌릴 수 없습니다.",
      okText: "예",
      cancelText: "아니오",
      onOk: () => {
        setTodos([]);
        message.success("모든 할 일이 삭제되었습니다.");
      },
    });
  }, []);

  return {
    todos: filteredTodos(),
    setTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    filter,
    setFilter,
    clearAllTodos,
  };
};

export default useTodo;
