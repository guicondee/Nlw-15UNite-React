import Logo from "../../assets/logo.svg";
import { NavLink } from "../nav-link/nav-link";

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img
        src={Logo}
        alt="Logo da aplicação, laranja com um desenho de fechamento de tag html preto"
      />

      <nav className="flex gap-5">
        <NavLink>Eventos</NavLink>
        <NavLink>Participante</NavLink>
      </nav>
    </div>
  );
}
