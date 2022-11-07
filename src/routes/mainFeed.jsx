import { Divider } from "antd";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ChannelCard from "../components/ChannelCard";
import Searchbar from "../components/Searchbar";
import SecondaryNavbar from "../components/SecondaryNavbar";
import VideoCard from "../components/VideoCard";
import { GlobalContext } from "../context/context";
import { fetchDatFromAPI } from "../utils/fetchFromAPI";

const MainFeed = () => {
  const { searchQuery, setVideos, videos } = useContext(GlobalContext);

  useEffect(() => {
    fetchDatFromAPI(`search?part=snippet&q=${searchQuery}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchQuery, setVideos]);

  return (
    <MainFeedWrapper>
      <div className="long-search-bar">
        <Searchbar />
      </div>
      <SecondaryNavbar />
      <Divider />
      <BodyWrapper>
        {videos?.length !== 0 &&
          videos?.map((item) => (
            <>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channel={item} />}
            </>
          ))}
      </BodyWrapper>
    </MainFeedWrapper>
  );
};

const MainFeedWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  .long-search-bar {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .long-search-bar {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;

const BodyWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default MainFeed;
