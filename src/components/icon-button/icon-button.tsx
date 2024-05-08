import { ComponentProps } from "react";

export interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      className={
        transparent === true
          ? "bg-black/20 border border-white/10 rounded-md px-1.5 py-1.5"
          : "bg-white/10 border border-white/10 rounded-md px-1.5 py-1.5"
      }
      {...props}
    >
      {props.children}
    </button>
  );
}
