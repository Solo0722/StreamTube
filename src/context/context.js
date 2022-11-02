import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("new");

  return (
    <GlobalContext.Provider
      value={{ videos, searchQuery, setVideos, setSearchQuery }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
