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
import { attendees } from "../../data/attendees";

import moment from "moment";
import "moment/dist/locale/pt-br";

export function AttendeeList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const totalPage = Math.ceil(attendees.length / 10);

  const handleSearchingInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const goToFirstPage = () => {
    setPage(1);
  };

  const goToLastPage = () => {
    setPage(totalPage);
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
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
            return (
              <TableRow key={attendee.id}>
                <TableCell>
                  <CheckboxInput />
                </TableCell>
                <TableCell>{attendee.id}</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">
                      {attendee.name}
                    </span>
                    <span>{attendee.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  {moment(attendee.createdAt, "YYYYMMDD")
                    .locale("pt-br")
                    .fromNow()}
                </TableCell>
                <TableCell>
                  {moment(attendee.checkInAt, "YYYYMMDD")
                    .locale("pt-br")
                    .fromNow()}
                </TableCell>
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
            <TableCell colSpan={3}>
              Mostrando 10 de {attendees.length} registros
            </TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex items-center gap-8 ">
                <span>
                  Pagina {page} de {totalPage}
                </span>

                <div className="flex gap-1.5">
                  <IconButton disabled={page === 1} onClick={goToFirstPage}>
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton disabled={page === 1} onClick={goToPreviousPage}>
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPage}
                    onClick={goToNextPage}
                  >
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton
                    disabled={page === totalPage}
                    onClick={goToLastPage}
                  >
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
