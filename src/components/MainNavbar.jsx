import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <LogoWrapper>
          <img src="/images/streamtube.svg" alt="img-logo" />
          <h2>StreamTube</h2>
        </LogoWrapper>
      </Link>
      <div className="long-search-bar">
        <Searchbar />
      </div>
      <Button
        type="primary"
        shape="circle"
        size={"small"}
        icon={<AiOutlineSearch />}
        className="mobile-search-btn"
      />
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

  .long-search-bar {
    width: 70%;
  }

  .mobile-search-btn {
    display: none;
  }

  @media screen and (max-width: 500px) {
    .long-search-bar {
      display: none;
    }

    .mobile-search-btn {
      display: grid;
      place-items: center;
    }
  }
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
    margin-left: 10px;
    font-size: 20px;
    font-weight: bolder;
    font-family: "PT Sans";
  }
`;

export default MainNavbar;
