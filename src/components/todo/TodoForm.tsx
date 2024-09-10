import {useState} from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import {PlusOutlined} from "@ant-design/icons";
import {Space} from "antd";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

function TodoForm({onAddTodo}: TodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    const trimmedText = text.trim();
    if (trimmedText !== "") {
      onAddTodo(text.trim());
      setText("");
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Space.Compact style={{width: "100%"}}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleEnterPress}
        placeholder="새로운 할일을 추가해 주세요."
      />
      <Button type="primary" icon={<PlusOutlined />} onClick={handleSubmit}>
        추가하기
      </Button>
    </Space.Compact>
  );
}

export default TodoForm;
