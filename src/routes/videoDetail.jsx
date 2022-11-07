import { Divider } from "antd";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import ChannelCard from "../components/ChannelCard";
import VideoCard from "../components/VideoCard";
import { GlobalContext } from "../context/context";
import { fetchDatFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { videoId } = useParams();
  const {} = useContext(GlobalContext);
  const [videoDetail, setVideoDetail] = useState([]);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    fetchDatFromAPI(`videos?part=snippet,statistics&id=${videoId}`).then(
      (data) => {
        setVideoDetail(data?.items[0]);
        console.log(data?.items[0]);
      }
    );

    fetchDatFromAPI(
      `search?part=snippet&relatedToVideoId=${videoId}&type=video`
    ).then((data) => {
      setRelatedVideos(data.items);
    });
  }, [videoId]);

  return (
    <VideoDetailWrapper>
      <VideoPlayerWrapper>
        <ReactPlayer
          url={`https://www/youtube.com/watch?v=${videoId}`}
          className="react-player"
          controls
          width={"100%"}
          height={"100%"}
        />
      </VideoPlayerWrapper>
      <VideoStatisticsWrapper>
        <h2>
          <strong>{videoDetail?.snippet?.title}</strong>
        </h2>
        <Link
          to={
            videoDetail?.snippet?.channelId
              ? `/channel/${videoDetail?.snippet?.channelId}`
              : "/"
          }
        >
          <p>
            {videoDetail?.snippet?.channelTitle}{" "}
            <BsCheckCircleFill
              size={10}
              style={{
                marginLeft: "5px",
                color: "rgba(0,0,0,0.5)",
              }}
            />
          </p>
        </Link>
        <p>
          <small>{moment(videoDetail?.snippet?.publishedAt).fromNow()}</small>
        </p>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>
            {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()}{" "}
            likes
          </p>
          <p>
            {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()}{" "}
            views
          </p>
        </div>
        <p>{videoDetail?.snippet?.description}</p>
      </VideoStatisticsWrapper>
      <br />
      <div style={{ padding: "1rem" }}>
        <Divider />
      </div>
      <br />
      <MoreVideoWrapper>
        <h2>
          <strong>Related videos</strong>
        </h2>
        <BodyWrapper>
          {relatedVideos?.length !== 0 &&
            relatedVideos?.map((item) => (
              <>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channel={item} />}
              </>
            ))}
        </BodyWrapper>
      </MoreVideoWrapper>
    </VideoDetailWrapper>
  );
};

const VideoDetailWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
`;
const VideoPlayerWrapper = styled.div`
  width: 100%;
  height: 450px;
`;
const VideoStatisticsWrapper = styled.div`
  width: 100%;
  padding: 1rem;
`;

const MoreVideoWrapper = styled.div`
  width: 100%;
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

export default VideoDetail;
