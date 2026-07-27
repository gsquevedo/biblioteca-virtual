import { ChangeEvent } from "react";

type InputProps = {
  id?: string;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  required?: boolean,
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ className, ...props } : InputProps) {
  return (
    <input
      className={className}
      {...props}
    />
  )
}