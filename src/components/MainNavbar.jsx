import { Avatar, Button } from "antd";
import React from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import Searchbar from "./Searchbar";

const MainNavbar = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <Button
          type="text"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "7px",
          }}
          icon={<AiOutlineMenu size={20} />}
        />
        <img src="/images/streamtube.svg" alt="img-logo" />
        <h2>StreamTube</h2>
      </LogoWrapper>
      <Searchbar />
      <AvatarWrapper>
        <Avatar
          style={{
            color: "#fff",
            backgroundColor: "#007FFF",
          }}
        >
          U
        </Avatar>
      </AvatarWrapper>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05);
  background: #fff;
  position: sticky;
  top: 0%;
  z-index: 10;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bolder;
    font-family: "PT Sans";
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export default MainNavbar;
