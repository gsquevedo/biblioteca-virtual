import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;