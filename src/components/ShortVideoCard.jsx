import React from "react";
import styled from "styled-components";

const ShortVideoCard = ({ video }) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <img src="" alt="children-img" />
      </ImageWrapper>
      <ContentWrapper>
        <h4>{video.title}</h4>
        <small>700k views</small>
      </ContentWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  width: 200px;
  height: 320px;
  margin: 10px;
`;

const ImageWrapper = styled.div`
  height: 85%;
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
  flex-direction: column;
  justify-content: space-between;

  h4 {
    margin: 0;
    font-weight: 500;
    font-family: "Roboto";
  }

  p {
    margin: 0;
  }
`;

export default ShortVideoCard;
