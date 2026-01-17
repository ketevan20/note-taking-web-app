import { createContext, useContext, useState } from "react";

type SearchContextType = {
  searchId: string;
  setSearchId: (id: string) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchId, setSearchId] = useState("");

  return (
    <SearchContext.Provider value={{ searchId, setSearchId }}>
      {children}
    </SearchContext.Provider>
  );
};
