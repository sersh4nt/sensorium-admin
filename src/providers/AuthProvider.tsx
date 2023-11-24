import { useEffect, useState, useMemo, createContext, useContext } from "react";
import axios from "axios";

interface AuthProviderProps {
  children: React.ReactElement;
}

export interface AuthContext {
  token: string | null;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContext>({
  token: null,
  setToken: () => {},
});

const AuthProvider = (props: AuthProviderProps) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));

  const setToken = (token: string) => setToken_(token);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common.Authorization = `Token ${token}`;
      localStorage.setItem("token", token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  const value = useMemo(() => ({ token, setToken }), [token]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
