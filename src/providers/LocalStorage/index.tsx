// Imports
// ========================================================
import { useState, createContext, useEffect } from "react";
import { LocalStorageContextType } from "./type";

// Context
// ========================================================
const LocalStorageContext = createContext<LocalStorageContextType | null>(null);

// Main Provider
// ========================================================
const LocalStorageProvider: React.FC<{ children: JSX.Element, item: string }> = ({ children, item }) => {
  // States
  const [data, setData] = useState(() => {
    const existingData = localStorage.getItem(item);
    if (existingData) {
      try {
        return JSON.parse(existingData);
      } catch (error) {
        console.log({ error });
      }
    }
    return null;
  });

  // Hooks
  useEffect(() => {
    if (!data) return;
    localStorage.setItem(item, JSON.stringify(data));
  }, [data]);

  // Render / UI
  return <LocalStorageContext.Provider value={{
    data,
    setData
  }}>
    {children}
  </LocalStorageContext.Provider>
};

// Exports
// ========================================================
export default LocalStorageProvider;
export {
  LocalStorageContext
};