import React from "react";
import styled from "styled-components";
import { SiGooglemessages } from "react-icons/si";

const Wrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #25d366;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  transform: translateX(655%);
`;

function NewChat() {
  return (
    <Wrapper>
      <SiGooglemessages
        size="25px"
        style={{ transform: "rotateY(180deg)", color: "#fff" }}
      />
    </Wrapper>
  );
}

export default NewChat;
