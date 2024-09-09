import classNames from "classNames";
import {Button as AntButton} from "antd";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "primary" | "default" | "dashed" | "link" | "text";
  size?: "large" | "middle" | "small";
  icon?: React.ReactNode;
  loading?: boolean;
}

function Button({
  children,
  onClick,
  disabled = false,
  className,
  type = "default",
  size = "middle",
  icon,
  loading = false,
}: ButtonProps) {
  const buttonClasses = classNames("custom-button", className);

  return (
    <>
      <AntButton
        onClick={onClick}
        disabled={disabled}
        className={buttonClasses}
        type={type}
        size={size}
        icon={icon}
        loading={loading}>
        {children}
      </AntButton>
    </>
  );
}

export default Button;
