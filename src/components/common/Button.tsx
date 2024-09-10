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
  return (
    <AntButton
      onClick={onClick}
      disabled={disabled}
      className={className}
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
