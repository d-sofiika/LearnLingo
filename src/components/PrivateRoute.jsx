import { useState, useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import LogIn from "./LogIn/LogIn";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const [isLogInOpen, setIsLogInOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setIsLogInOpen(true);
    }
  }, [currentUser]);

  return currentUser ? children : <LogIn isLogInOpen={isLogInOpen} setIsLogInOpen={setIsLogInOpen} />;
};

export default PrivateRoute;
