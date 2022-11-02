import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MainNavbar from "../components/MainNavbar";
import ChannelDetail from "../routes/channelDetail";
import MainFeed from "../routes/mainFeed";
import SearchFeed from "../routes/searchFeed";
import VideoDetail from "../routes/videoDetail";

const Main = () => {
  return (
    <>
      <MainNavbar />
      <RoutesWrapper>
        <Routes>
          <Route path="/" exact element={<MainFeed />} />
          <Route path="/video/:videoId" exact element={<VideoDetail />} />
          <Route path="/channel/:channelId" exact element={<ChannelDetail />} />
          <Route path="/search" exact element={<SearchFeed />} />
        </Routes>
      </RoutesWrapper>
    </>
  );
};

const RoutesWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
`;

export default Main;
