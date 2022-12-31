import { createContext, useContext, useEffect, useState } from "react";
import { createUser, getUser } from "../services/user-services";
import * as auth from "../services/auth-services";
import { useNavigate } from "react-router-dom";

interface Conte {
  user: null | {};
  login: Function;
  logout: Function;
  signup: Function;
  state: {};
  setState: Function;
}

const AuthContext = createContext<Conte | null>(null);

function AuthProvider(props: object) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [state, setState] = useState({
    status: "idle", // success - error - pending
    data: null,
    error: null,
  });

  // useEffect(() => {
  //   getUser().then(setUser).catch(console.log);
  // }, []);

  function login(credentials: object) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function logout() {
    auth.logout().then(() => {
      setUser(null);
      navigate("/");
    });
  }

  function signup(userData: object) {
    createUser(userData).then(setUser).catch(console.log);
  }

  // function update(userData) {
  //   updateUser(userData).then(setUser).catch(console.log);
  // }

  const value = {
    user,
    login,
    logout,
    signup,
    state,
    setState,
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth(): Conte {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
