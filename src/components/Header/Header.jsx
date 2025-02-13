import css from "./Header.module.css";
import { useEffect, useState } from "react";
import LogIn from "../LogIn/LogIn";
import Registration from "../Registration/Registration";
import LogOut from "../LogOut/LogOut";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NavLinks from "../NavLinks/NavLinks";

export default function Header() {
  const [isLogOutOpen, setIsLogOutOpen] = useState(false);
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={`section ${css.headerContainer}`}>
      <NavLinks/>
      <div className={css.buttonBox}>
        {isAuthenticated ? (
          <button
            type="button"
            onClick={() => setIsLogOutOpen(true)}
            className={css.btnLogIn}
          >
            <svg width="26" height="24" className={css.logIcon}>
              <use href="/sprite.svg#icon-log-in"></use>
            </svg>
            <p>Log out</p>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setIsLogInOpen(true)}
            className={css.btnLogIn}
          >
            <svg width="26" height="24" className={css.logIcon}>
              <use href="/sprite.svg#icon-log-in"></use>
            </svg>
            <p>Log in</p>
          </button>
        )}

        {!isAuthenticated && (
          <button
            type="button"
            onClick={() => setIsRegistrationOpen(true)}
            className={css.btnRegist}
          >
            Registration
          </button>
        )}
      </div>
      <LogIn isLogInOpen={isLogInOpen} setIsLogInOpen={setIsLogInOpen} />
      <Registration
        isRegistrationOpen={isRegistrationOpen}
        setIsRegistrationOpen={setIsRegistrationOpen}
      />
      <LogOut isLogOutOpen={isLogOutOpen} setIsLogOutOpen={setIsLogOutOpen} />
    </div>
  );
}
