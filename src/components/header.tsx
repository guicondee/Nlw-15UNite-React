import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img
        src={Logo}
        alt="Logo da aplicação, laranja com um desenho de fechamento de tag html preto"
      />

      <nav className="flex gap-5">
        <a className="text-sm font-medium text-zinc-300" href="">
          Eventos
        </a>
        <a className="text-sm font-medium" href="">
          Participantes
        </a>
      </nav>
    </div>
  );
}
