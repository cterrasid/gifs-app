import { createContext, useContext, useState, useMemo } from "react";

// Context
export const GifsContext = createContext({});

// Provider
export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const values = useMemo(() => ({ gifs, setGifs }), [gifs]);

  return (
    <GifsContext.Provider value={values}>
      {children}
    </GifsContext.Provider>
  );
}

export function useGifsContext() {
  const context = useContext(GifsContext);
  if (!context) {
    console.error("Error deploying Gifs Context");
  }

  return context;
}

export default useGifsContext;
