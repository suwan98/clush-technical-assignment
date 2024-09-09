import {Todo} from "@/types/Todo";
import TodoForm from "./TodoForm";

interface TodoContainerProps {
  todos: Todo[];
  onAddTodo: (text: string) => void;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

function TodoContainer({
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
}: TodoContainerProps) {
  return (
    <>
      <TodoForm onAddTodo={onAddTodo} />
    </>
  );
}

export default TodoContainer;
