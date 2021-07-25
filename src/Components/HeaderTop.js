import React from "react";
import styled from "styled-components";
import { GoSearch } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";

const StyledHeader = styled.header`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0;
`;

const StyledHeading = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

function HeaderTop() {
  return (
    <StyledHeader>
      <StyledHeading>WhatsApp</StyledHeading>
      <div>
        <GoSearch size="20px" style={{ marginRight: "25px" }} />
        <BsThreeDotsVertical size="20px" />
      </div>
    </StyledHeader>
  );
}

export default HeaderTop;
