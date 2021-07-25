import React from "react";
import styled from "styled-components";
import { MdCameraAlt } from "react-icons/md";

const TabsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 35px;
`;

const Tab = styled.div`
  --clr: ${(props) => (props.isActive ? "#fff" : "#77b1af")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  padding: 0 10px 12px;
  color: var(--clr);
  border-bottom: 3px solid
    ${(props) => (props.isActive ? "#fff" : "transparent")};
  box-shadow: ${(props) => (props.isActive ? "0 2px rgba(0,0,0,0.1)" : "none")};

  &:first-child {
    font-size: 24px;
    flex-basis: 10%;
  }
`;

const TabNotification = styled.span`
  min-width: 20px;
  height: 20px;
  padding: 0 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #075e54;
  font-size: 10px;
  margin-left: 7px;
  background-color: var(--clr);
`;

function HeaderTabs() {
  return (
    <TabsWrapper>
      <Tab>
        <MdCameraAlt />
      </Tab>
      <Tab isActive>
        <span>chats</span>
        <TabNotification>61</TabNotification>
      </Tab>
      <Tab>
        <span>status</span>
      </Tab>
      <Tab>
        <span>calls</span>
        <TabNotification>1</TabNotification>
      </Tab>
    </TabsWrapper>
  );
}

export default HeaderTabs;
