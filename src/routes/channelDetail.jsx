import { useState,useContext,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ChannelCard from "../components/ChannelCard";
import VideoCard from "../components/VideoCard";
import { GlobalContext } from "../context/context";
import { fetchDatFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { channelId } = useParams();
  const { channelDetail, setChannelDetail } = useContext(GlobalContext);
  const [channelVideos, setChannelVideos] = useState([]);

  useEffect(() => {
    fetchDatFromAPI(`channels?part=snippet&id=${channelId}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });

    fetchDatFromAPI(
      `search?channelId=${channelId}&part=snippet&order=date`
    ).then((data) => {
      setChannelVideos(data.items);
    });
  }, [channelId, setChannelDetail]);

  return (
    <ChannelDetailWrapper>
      <PosterWrapper>
        <img
          src={channelDetail?.brandSettings?.image?.bannerExternalUrl}
          alt=""
        />
      </PosterWrapper>
      <div style={{ padding: "1rem" }}>
        <Link
          to={
            channelDetail?.snippet?.channelId
              ? `/channel/${channelDetail?.snippet?.channelId}`
              : "/"
          }
        >
          <ProfileWrapper>
            <ProfilePic
              src={
                channelDetail?.snippet?.thumbnails?.high?.url ||
                `/images/streamtube.svg`
              }
              alt="channel-profile-pic"
            />
            <strong>{channelDetail?.snippet?.title}</strong>
            <em>{channelDetail?.snippet?.description}</em>
            <small>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              subscribers
            </small>
          </ProfileWrapper>
        </Link>
        <VideosWrapper>
          {channelVideos?.length !== 0 &&
            channelVideos?.map((item) => (
              <>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channel={item} />}
              </>
            ))}
        </VideosWrapper>
      </div>
    </ChannelDetailWrapper>
  );
};

const ChannelDetailWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;
const PosterWrapper = styled.div`
  width: 100%;
  height: 250px;
  background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 10;
  }
`;
const ProfileWrapper = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-top: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 99;

  small,
  strong {
    margin-top: 5px;
  }

  em {
    text-align: center;
    margin: 5px 0;
  }
`;

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid green;
`;
const VideosWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default ChannelDetail;
