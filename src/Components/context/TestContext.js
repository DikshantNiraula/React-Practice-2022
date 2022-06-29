import { createContext, useState } from "react";

export const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [test, setTest] = useState("0px");

  return (
    <TestContext.Provider value={{ test, setTest }}>
      {children}
    </TestContext.Provider>
  );
};
