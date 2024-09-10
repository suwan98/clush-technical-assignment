import {Todo} from "@/types/Todo";
import TodoItem from "./TodoItem";
import {List} from "antd";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

function TodoList({todos, onToggleTodo, onDeleteTodo}: TodoListProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={todos}
      renderItem={(todo) => (
        <List.Item>
          <TodoItem
            todo={todo}
            onToggle={onToggleTodo}
            onDelete={onDeleteTodo}
          />
        </List.Item>
      )}
      locale={{emptyText: "할 일이 없습니다. 새로운 할 일을 추가해보세요!"}}
    />
  );
}

export default TodoList;
