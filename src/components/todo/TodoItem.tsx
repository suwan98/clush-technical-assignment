import {Todo} from "@/types/Todo";
import {Checkbox} from "antd";
import Button from "../common/Button";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({todo, onToggle, onDelete}: TodoItemProps) {
  return (
    <>
      <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}>
        {todo.text}
      </Checkbox>
      <Button onClick={() => onDelete(todo.id)}>삭제</Button>
    </>
  );
}

export default TodoItem;
