import type { ReactElement } from "react";
import { PlusIcon } from "./icons/PlusIcon";

type Variant = 'primary' | 'secondary';

export interface ButtonProps {
  variant: Variant;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  fullwidth?: boolean;
}

const variantStyles: Record<Variant, string> = {
  "primary": "bg-Purple600 text-white",
  "secondary": "bg-Purple200 text-Purple600"
}

const defaultStyles = "rounded-md px-4 py-2 font-light items-center justify-center"

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
  let fullwidth = props.fullwidth;

  return <button onClick={onClick} className={`cursor-pointer ${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyles} flex gap-2 ${fullwidth ? "w-full" : ""}`} >
    {props.startIcon}
    {text}
  </button>
}
