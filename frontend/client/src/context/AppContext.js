import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <AppContext.Provider value={{ cart, setCart }}>
      {children}
    </AppContext.Provider>
  );
}
