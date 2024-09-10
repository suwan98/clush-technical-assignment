import classNames from "classnames";
import {Button as AntButton, ButtonProps as AntButtonProps} from "antd";

interface ButtonProps extends Omit<AntButtonProps, "type"> {
  children: React.ReactNode;
  type?: "primary" | "default" | "dashed" | "link" | "text";
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
  ...rest
}: ButtonProps) {
  const buttonClasses = classNames("custom-button", className);

  return (
    <AntButton
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      type={type}
      size={size}
      icon={icon}
      loading={loading}
      {...rest}>
      {children}
    </AntButton>
  );
}

export default Button;
