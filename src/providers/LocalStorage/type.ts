// Types
// ========================================================
export interface LocalStorageContextType {
  data: {
    [key: string]: any;
  };
  setData: (args: any) => void;
}
