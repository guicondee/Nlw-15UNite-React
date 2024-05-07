import { Search } from "lucide-react";
import * as Input from "../components/input/index";

export function AtendeeList() {
  return (
    <div className="flex items-center gap-3">
      <p className="text-2xl font-bold">Participantes</p>
      <div className="w-72">
        <Input.Root>
          <Input.Prefix>
            <Search width={16} height={16} color="#86efac" />
          </Input.Prefix>
          <Input.Control placeholder="Buscar participantes" />
        </Input.Root>
      </div>
    </div>
  );
}
