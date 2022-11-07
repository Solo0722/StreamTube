import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { GlobalContext } from "../context/context";
import { useContext, useState } from "react";
import { message } from "antd";

const Searchbar = () => {
  const { setSearchQuery } = useContext(GlobalContext);

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (!inputValue) {
      message.error("Please enter a search query!");
    } else {
      setSearchQuery(inputValue);
    }
  };

  return (
    <SearchWrapper>
      <InputWrapper
        placeholder="Search"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <SearchButtonWrapper onClick={handleSearch}>
        <FiSearch />
      </SearchButtonWrapper>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-radius: 5px;
  border: 1px solid #d8d8d8;

  button {
    margin-left: 10px;
  }
`;

const InputWrapper = styled.input`
  width: 93%;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-right: 20px;
  padding-left: 10px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  transition: all ease-in-out 0.3s;
`;

const SearchButtonWrapper = styled.div`
  width: 7%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all ease-in-out 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export default Searchbar;
