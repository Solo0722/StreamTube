import { Divider } from "antd";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import ChannelCard from "../components/ChannelCard";
import SecondaryNavbar from "../components/SecondaryNavbar";
import ShortVideoCard from "../components/ShortVideoCard";
import VideoCard from "../components/VideoCard";
import { GlobalContext } from "../context/context";
import { mockVideos } from "../utils/data";
import { fetchDatFromAPI } from "../utils/fetchFromAPI";

const MainFeed = () => {
  const { searchQuery, setVideos, videos } = useContext(GlobalContext);

  useEffect(() => {
    fetchDatFromAPI(`search?part=snippet&q=${searchQuery}`).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [searchQuery]);

  return (
    <MainFeedWrapper>
      <SecondaryNavbar />
      <BodyWrapper>
        {videos.length !== 0 &&
          videos.map((item) => (
            <>
              {item.id.videoId && <VideoCard video={item} />}
              {item.id.channelId && <ChannelCard channel={item} />}
            </>
          ))}
      </BodyWrapper>
      {/* <Divider
        style={{ height: "3px", color: "#e5e5e5", background: "#e5e5e5" }}
      />
      <h2>
        <span>
          <img
            src="/images/streamtube-shorts.svg"
            alt="streamtube-shorts"
            width={30}
            height={30}
            style={{ marginRight: "10px" }}
          />
        </span>
        <span>Shorts</span>
      </h2>
      <BodyWrapper>
        {mockVideos.map((video) => (
          <ShortVideoCard video={video} />
        ))}
      </BodyWrapper> */}
    </MainFeedWrapper>
  );
};

const MainFeedWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
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
