// Imports
// ========================================================
import { BrowserRouter } from "react-router-dom";
import LocalStorageProvider from "./LocalStorage";

// Main Providers
// ========================================================
const RootProviders: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <>
    <BrowserRouter>
      <LocalStorageProvider item="react-ts-key">
        {children}
      </LocalStorageProvider>
    </BrowserRouter>
  </>;
};

// Exports
// ========================================================
export default RootProviders;