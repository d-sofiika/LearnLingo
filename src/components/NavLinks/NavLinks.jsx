import { NavLink } from "react-router-dom";
import LogoUkraine from "../../../public/LogoUkraine.svg";
import css from "./NavLinks.module.css";

export default function NavLinks() {
  return (
    <>
      <nav>
        <NavLink to="/" className={css.navLogo}>
          <img src={LogoUkraine} className={css.logo} alt="Logo" />
          <p className={css.logoText}>LearnLingo</p>
        </NavLink>
      </nav>

      <nav className={css.nav}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/teachers" className={css.link}>
          Teachers
        </NavLink>
      </nav>
    </>
  );
}
