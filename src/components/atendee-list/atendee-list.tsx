import {
  Search,
  MoreHorizontal,
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";
import * as Input from "../input/index";
import { CheckboxInput } from "../checkbox/checkbox";
import { IconButton } from "../icon-button/icon-button";
import { Table } from "../table/table";
import { TableHeader } from "../table/table-header";
import { TableCell } from "../table/table-cell";
import { TableRow } from "../table/table-row";
import { ChangeEvent, useState } from "react";

export function AtendeeList() {
  const [search, setSearch] = useState("");

  const handleSearchingInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">Participantes</p>
        <div className="w-72">
          <Input.Root>
            <Input.Prefix>
              <Search width={16} height={16} color="#86efac" />
            </Input.Prefix>
            <Input.Control
              onChange={handleSearchingInput}
              placeholder="Buscar participantes"
            />
          </Input.Root>
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <CheckboxInput />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data da inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, index) => {
            return (
              <TableRow key={index}>
                <TableCell>
                  <CheckboxInput />
                </TableCell>
                <TableCell>52716</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">
                      Guilherme Vinicios Conde
                    </span>
                    <span>gui.dev@gmail.com.br</span>
                  </div>
                </TableCell>
                <TableCell>7 days ago</TableCell>
                <TableCell>7 days ago</TableCell>
                <TableCell>
                  <IconButton transparent>
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <TableCell colSpan={3}>Showing 10 of 228 items</TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8 ">
                <span> Page 1 of 11</span>

                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}
