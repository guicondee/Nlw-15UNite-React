import { ComponentProps } from "react";

export interface PrefixProps extends ComponentProps<"div"> {}

export function Prefix(props: PrefixProps) {
  return <div {...props} />;
}
