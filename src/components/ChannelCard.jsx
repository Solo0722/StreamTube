import { Avatar } from "antd";
import moment from "moment";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ChannelCard = ({ channel }) => {
  return (
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <CardWrapper>
        <ImageWrapper>
          <img
            src={
              channel?.snippet?.thumbnails?.high?.url ||
              `/images/streamtube.svg`
            }
            alt={channel?.snippet?.title}
          />
          <h4>
            {channel?.snippet?.title}
            <BsCheckCircleFill
              size={10}
              style={{
                marginLeft: "5px",
                color: "rgba(0,0,0,0.5)",
              }}
            />
          </h4>
        </ImageWrapper>
      </CardWrapper>
    </Link>
  );
};

const CardWrapper = styled.div`
  width: 270px;
  height: 270px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;

  img {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    position: relative;
  }

  h4 {
    margin: 0;
    margin-top: 7px;
    font-weight: 500;
    font-family: "Roboto";
  }
`;

export default ChannelCard;
