import {useState} from "react";
import Input from "../common/Input";
import Button from "../common/Button";

function TodoForm({onAddTodo}: {onAddTodo: (text: string) => void}) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim() === "") return;
    onAddTodo(text);
    setText("");
  };

  return (
    <>
      <Input
        value={text}
        onChange={setText}
        placeholder="새로운 할일을 추가해 주세요."
      />
      <Button onClick={handleSubmit}>추가하기</Button>
    </>
  );
}

export default TodoForm;
