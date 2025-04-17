import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

    const variantStyles = {
      default: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500",
      outline: "border border-gray-300 bg-transparent hover:bg-gray-100 focus-visible:ring-gray-400",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
