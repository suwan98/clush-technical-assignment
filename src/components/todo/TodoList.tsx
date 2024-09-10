import {Todo} from "@/types/Todo";
import TodoItem from "./TodoItem";
import {List, Space, Typography} from "antd";
import ClearAllButton from "../common/ClearAllButton";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
  onClearAllTodos: () => void;
}

function TodoList({
  todos,
  onClearAllTodos,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  return (
    <>
      {todos.length > 0 && (
        <Space
          style={{
            marginBottom: 16,
            display: "flex",
            justifyContent: "space-between",
          }}>
          <Typography.Text
            strong>{`총 ${todos.length}개의 할 일`}</Typography.Text>
          <ClearAllButton onClearAll={onClearAllTodos} />
        </Space>
      )}
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
    </>
  );
}

export default TodoList;
