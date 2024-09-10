import {Layout, Menu} from "antd";
import TodoContainer from "./components/todo/TodoContainer";
import {UnorderedListOutlined, CheckSquareOutlined} from "@ant-design/icons";
import useTodo from "./hooks/useTodo";

function App() {
  const {todos, addTodo, toggleTodo, deleteTodo, filter, setFilter} = useTodo();

  const handleMenuClick = (key: string) => {
    setFilter(key as "all" | "completed");
  };

  return (
    <Layout style={{minHeight: "100vh"}}>
      <Layout.Sider breakpoint="lg" collapsedWidth="0">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[filter]}
          onClick={({key}) => handleMenuClick(key)}>
          <Menu.Item key="all" icon={<UnorderedListOutlined />}>
            모든 할 일
          </Menu.Item>
          <Menu.Item key="completed" icon={<CheckSquareOutlined />}>
            완료된 할 일
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{margin: "24px 16px 0"}}>
          <div style={{padding: 24, minHeight: 360, background: "#fff"}}>
            <TodoContainer
              todos={todos}
              onAddTodo={addTodo}
              onToggleTodo={toggleTodo}
              onDeleteTodo={deleteTodo}
            />
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}

export default App;
