import { NavLink } from "react-router-dom";
import LogoUkraine from "../../../public/LogoUkraine.svg";
import css from "./NavLinks.module.css";
import { useAuth } from "../Context/AuthContext";

export default function NavLinks() {
  const { currentUser } = useAuth();
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
        {currentUser && (
          <NavLink to="/favorites" className={css.link}>
            Favorites
          </NavLink>
        )}
      </nav>
    </>
  );
}
