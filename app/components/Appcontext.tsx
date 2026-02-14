"use client";

import { createContext } from "react";

export const AppContext = createContext<any>(null);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = {
    name: "Santhi",
    age: 21,
    score: 95,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
}
