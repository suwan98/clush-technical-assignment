import Input from "@/components/common/Input";
import {useState} from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <Input value={text} onChange={setText} placeholder="Enter text" />
    </>
  );
}

export default App;
