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
import { ChangeEvent, useEffect, useState } from "react";

import moment from "moment";
import "moment/dist/locale/pt-br";

interface AttendeesProps {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}
export function AttendeeList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? "";
    }

    return "";
  });
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has("page")) {
      return Number(url.searchParams.get("page"));
    }

    return 1;
  });
  const [total, setTotal] = useState(0);
  const [attendees, setAttendees] = useState<AttendeesProps[]>([]);

  const totalPage = Math.ceil(total / 10);

  const setCurrentSearch = (search: string) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("search", search);

    window.history.pushState({}, "", url);

    setSearch(search);
  };

  const handleSearchingInput = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentSearch(event.target.value);
    setCurrentPage(1);
  };

  const setCurrentPage = (page: number) => {
    const url = new URL(window.location.toString());

    url.searchParams.set("page", String(page));

    window.history.pushState({}, "", url);
    setPage(page);
  };

  const goToNextPage = () => {
    setCurrentPage(page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage(page - 1);
  };

  const goToFirstPage = () => {
    setCurrentPage(1);
  };

  const goToLastPage = () => {
    setCurrentPage(totalPage);
  };

  useEffect(() => {
    const url = new URL(
      "http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees"
    );

    url.searchParams.set("pageIndex", String(page - 1));

    if (search.length) {
      url.searchParams.set("query", search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data: any) => {
        setAttendees(data.attendees);
        setTotal(data.total);
      });
  }, [page, search]);

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
              value={search}
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
          {attendees.map((attendee) => {
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
                  {attendee.checkedInAt === null ? (
                    <span className="text-zinc-400">Não fez check-in</span>
                  ) : (
                    <span>
                      {moment(attendee.checkedInAt, "YYYYMMDD")
                        .locale("pt-br")
                        .fromNow()}
                    </span>
                  )}
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
              Mostrando {attendees.length} de {total} registros
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
