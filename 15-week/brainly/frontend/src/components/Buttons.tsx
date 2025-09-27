import { PlusIcon } from "./icons/PlusIcon";

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick: () => void;
}

const variantStyles: Record<Variant, string> = {
  "primary": "bg-button1 text-button2",
  "secondary": "bg-button3 text-button1"
}

const defaultStyles = "rounded-md p-4"

const sizeStyles = {
  "sm": 'p-2',
  'md': 'p-4',
  'lg': 'p-6'
}

export const Button = (props: ButtonProps) => {
  let text = props.text;
  let size = props.size;
  let variant = props.variant;
  let onClick = props.onClick;

  return <button onClick={onClick} className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles}`} ><PlusIcon size={size} />{text}</button>
}
