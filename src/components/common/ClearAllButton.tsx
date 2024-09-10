import Button from "./Button";

interface ClearAllButtonProps {
  onClearAll: () => void;
}

function ClearAllButton({onClearAll}: ClearAllButtonProps) {
  return (
    <Button
      size="middle"
      type="primary"
      onClick={onClearAll}
      style={{
        padding: "15px",
        backgroundColor: "#ff4d4f",
        borderColor: "#ff4d4f",
      }}>
      전체 삭제
    </Button>
  );
}

export default ClearAllButton;
