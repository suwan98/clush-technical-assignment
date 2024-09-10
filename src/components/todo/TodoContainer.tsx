import {Todo} from "@/types/Todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {Card, Divider, Space} from "antd";
import {Typography} from "antd";

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
    <Card>
      <Space direction="vertical" style={{width: "100%"}}>
        <Typography.Title level={2}>할일 목록 📑</Typography.Title>
        <TodoForm onAddTodo={onAddTodo} />
        <Divider />
        <TodoList
          todos={todos}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      </Space>
    </Card>
  );
}

export default TodoContainer;
