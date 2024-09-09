import {Input as AntInput} from "antd";

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function Input({value, onChange, placeholder}: InputProps) {
  return (
    <AntInput
      valut={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        onChange(e.target.value)
      }
      placeholder={placeholder}
    />
  );
}

export default Input;
