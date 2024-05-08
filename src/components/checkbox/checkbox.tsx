import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

export function CheckboxInput() {
  return (
    <Checkbox.Root className="w-5 h-5 p-[2px] border rounded border-white/10 data-[state=checked]:bg-orange-400">
      <Checkbox.Indicator asChild>
        <Check className="size-3.5 font-bold text-black" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
