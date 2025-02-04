import { NavLink } from "react-router-dom";
import LogoUkraine from "../../../public/LogoUkraine.svg";
import css from "./Header.module.css";
import { useState } from "react";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";

export default function Header() {

  const [isLogInOpen, setIsLogInOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
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
        <button type="button" onClick={() => setIsLogInOpen(true)} className={css.btnLogIn}>
          <svg width="26" height="24" className={css.logIcon}>
            <use href="/sprite.svg#icon-log-in"></use>
          </svg>
          <p>Log in</p>
        </button>
        <button type="button" onClick={() => setIsRegistrationOpen(true)} className={css.btnRegist}>
          Registration
        </button>
      </div>
       <LogIn isLogInOpen={isLogInOpen} setIsLogInOpen={setIsLogInOpen} />
    <Registration isRegistrationOpen={isRegistrationOpen} setIsRegistrationOpen={setIsRegistrationOpen}/>    </div>
    
  );
}
