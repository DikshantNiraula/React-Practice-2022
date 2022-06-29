import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = () => {
  const [user, setUser] = useState("");
};
