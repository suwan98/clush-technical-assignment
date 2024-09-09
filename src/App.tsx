import {DatePicker} from "antd";
import Button from "@/components/common/Button";

function App() {
  return (
    <>
      <DatePicker />
      <Button
        onClick={() => console.log("Clicked!")}
        type="primary"
        size="large">
        기본 버튼
      </Button>
      <Button
        onClick={() => console.log("User button clicked!")}
        className="user-button">
        사용자
      </Button>
    </>
  );
}

export default App;
