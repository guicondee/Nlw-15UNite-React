import { ComponentProps } from "react";

export interface RootProps extends ComponentProps<"input"> {}

export function Root(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-3 rounded-lg border border-white/10 px-3 py-1.5 shadow-sm"
      {...props}
    />
  );
}
