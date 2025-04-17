import React from "react";


export const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`h-[1px] w-full bg-gray-200 ${className}`}
        {...props}
      />
    );
  }
);

Separator.displayName = "Separator";
