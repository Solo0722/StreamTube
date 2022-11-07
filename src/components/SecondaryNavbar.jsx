import { Button } from "antd";
import { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../context/context";
import { mockTags } from "../utils/data";

const SecondaryNavbar = () => {
  const { searchQuery, setSearchQuery } = useContext(GlobalContext);

  return (
    <NavWrapper>
      <HorizontalOverflowContainer>
        {mockTags.map((tag) => (
          <Button
            type="text"
            style={{
              backgroundColor: `${
                searchQuery == tag.toLowerCase() ? "#000" : ""
              }`,
              color: `${searchQuery == tag.toLowerCase() ? "#fff" : ""}`,
            }}
            onClick={() => setSearchQuery(tag.toLowerCase())}
          >
            {tag}
          </Button>
        ))}
      </HorizontalOverflowContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 100;
  position: sticky;
  top: 0;
`;

export const HorizontalOverflowContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }

  &:after {
    position: sticky;
    right: 0;
    height: 100%;
    width: 20%;
    content: "";
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 1) 20%,
      rgba(255, 255, 255, 0) 80%
    );
    pointer-events: none; /* so the text is still selectable */
  }

  button {
    background: #f2f2f2;
    margin: 0px 10px;
    border-radius: 5px;
  }
`;

export default SecondaryNavbar;
