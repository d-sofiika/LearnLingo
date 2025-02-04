import { NavLink } from "react-router-dom";
import LogoUkraine from "../../../public/LogoUkraine.svg";
import css from "./Header.module.css";

export default function Header() {
  return (
    <div className={`section ${css.headerContainer}`}>
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
      <div className={css.buttonBox}>
        <button type="button" className={css.btnLogIn}>
          <svg width="26" height="24" className={css.logIcon}>
            <use href="/sprite.svg#icon-log-in"></use>
          </svg>
          <p>Log in</p>
        </button>
        <button type="button" className={css.btnRegist}>
          Registration
        </button>
      </div>
    </div>
  );
}
