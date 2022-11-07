import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);
  const [searchQuery, setSearchQuery] = useState("new");

  return (
    <GlobalContext.Provider
      value={{
        videos,
        searchQuery,
        channelDetail,
        setVideos,
        setSearchQuery,
        setChannelDetail,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
