// Imports
// ========================================================
import { useContext } from "react";
import { LocalStorageContext } from "../../providers/LocalStorage";

// Main Hook
// ========================================================
const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      `Components using LocalStorageContext must be rendered within the LocalStorageProvider`
    );
  }
  return context;
};

// Exports
// ========================================================
export default useLocalStorage;