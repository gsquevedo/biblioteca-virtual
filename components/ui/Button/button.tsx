import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  children: ReactNode;
  value?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ className, children, ...props } : ButtonProps){
  return (
    <button 
      className={className} 
      {...props}
    >
      {children}
    </button>
  )
}