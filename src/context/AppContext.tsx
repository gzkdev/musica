import { createContext, useContext, useState } from "react";

interface contextInterface {
  isNavOpen: boolean;
  toggleIsNavOpen: () => void;
  setIsNavOpen: (value: React.SetStateAction<boolean>) => void;
}

const AppContext = createContext<contextInterface | null>(null);

interface Prop {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Prop) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <AppContext.Provider value={{ isNavOpen, toggleIsNavOpen, setIsNavOpen }}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContextStore = () => {
  const store = useContext(AppContext);
  return { ...store };
};
