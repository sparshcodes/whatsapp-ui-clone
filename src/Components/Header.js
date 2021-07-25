import React from "react";
import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import HeaderTabs from "./HeaderTabs";

const HeaderWrapper = styled.div`
  background-color: #075e54;
`;

function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderTop />
        <HeaderTabs />
      </HeaderWrapper>
    </>
  );
}

export default Header;
