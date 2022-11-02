import { Avatar } from "antd";
import moment from "moment";
import React from "react";
import styled from "styled-components";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <CardWrapper>
      <Link to={videoId ? `/video/${videoId}` : "/"}>
        <ImageWrapper>
          <img src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
          <p>34:20</p>
        </ImageWrapper>
      </Link>
      <ContentWrapper>
        <AvatarWrapper>
          <Avatar
            size={"small"}
            style={{
              color: "#fff",
              backgroundColor: "#007FFF",
            }}
          >
            U
          </Avatar>
        </AvatarWrapper>
        <DescriptionWrapper>
          <Link to={videoId ? `/video/${videoId}` : "/"}>
            <h4>
              {snippet?.title.length > 40
                ? snippet?.title.slice(0, 40) + "..."
                : snippet?.title}
            </h4>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : "/"}>
            <small>
              {snippet?.channelTitle || "Demo channel"}
              <BsCheckCircleFill
                size={10}
                style={{
                  marginLeft: "5px",
                  color: "rgba(0,0,0,0.5)",
                }}
              />
            </small>
          </Link>
          <br />
          <small>
            <span>340k views</span>
            &nbsp; &nbsp; &nbsp;
            <span>{moment(snippet?.publishedAt).fromNow()}</span>
          </small>
        </DescriptionWrapper>
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 270px;
  height: 270px;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  height: 60%;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    position: relative;
  }

  p {
    position: absolute;
    bottom: 5px;
    right: 10px;
    color: #fff;
    z-index: 100;
    font-size: 12px;
  }
`;
const ContentWrapper = styled.div`
  margin-top: 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const AvatarWrapper = styled.div`
  width: 15%;
`;
const DescriptionWrapper = styled.div`
  width: 85%;
  height: 100%;

  h4 {
    margin: 0;
    font-weight: 500;
    font-family: "Roboto";
  }

  p {
    margin: 0;
  }
`;

export default VideoCard;
