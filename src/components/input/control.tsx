import { ComponentProps } from "react";

export interface ControlProps extends ComponentProps<"input"> {}

export function Control(props: ControlProps) {
  return (
    <input
      className="w-full border-0 text-sm bg-transparent p-0 text-zinc-50  outline-none"
      {...props}
    />
  );
}
