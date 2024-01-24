import { useState, createContext, useContext } from "react";

interface AuthProviderProps {
  children: React.ReactElement;
}

export interface AuthContext {
  token: string | null;
  setToken: (token: string, remember: boolean) => void;
  removeToken: () => void;
}

const AuthContext = createContext<AuthContext>({
  token: null,
  setToken: () => {},
  removeToken: () => {},
});

const AuthProvider = (props: AuthProviderProps) => {
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem("token")
  );

  const setToken = (token: string, remember: boolean = true) => {
    setToken_(token);
    if (remember) {
      localStorage.setItem("token", token);
    }
  };

  const removeToken = () => {
    setToken_(null);
    localStorage.removeItem("token");
  };

  const value = { token, setToken, removeToken };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
