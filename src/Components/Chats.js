import React from "react";
import styled from "styled-components";
import kylieJenner from "../assets/kylieJenner.jpg";
import modi from "../assets/modi.jpg";
import divine from "../assets/divine.png";
import snoopDog from "../assets/snoopDog.jpg";
import elonMusk from "../assets/elonMusk.jpg";
import rajKundra from "../assets/rajKundra.jpg";
import johnWick from "../assets/johnWick.jpg";
import steveRogers from "../assets/steveRogers.jpeg";
import rajpalYadav from "../assets/rajpalYadav.PNG";
import loki from "../assets/loki.jpg";
import { IoVideocam } from "react-icons/io5";

const ChatWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Chat = styled.div`
  --clr: ${(props) => (props.isUnseen ? "#25D366" : "#777")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
const ProfileImg = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid #f7f7f7;
`;

const ChatName = styled.h3`
  color: #1e1e1e;
  font-weight: 500;
`;

const RecentChat = styled.span`
  font-size: 14px;
  color: #777;
  max-width: 48ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ChatTime = styled.span`
  color: var(--clr);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 0.5px;
`;

const UnseenChat = styled.span`
  min-width: 24px;
  height: 24px;
  padding: 0 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 10px;
  margin-left: 7px;
  font-weight: 700;
  background-color: var(--clr); ;
`;

const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 83%;
  margin-left: 20px;
`;

const ChatNameTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

const ChatText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Creating A Video Icon Component, (you can create the same for other whatsapp media
components, Like Stickers, Photo, Audio) you just have to change the icon and Text. */

const VideoComponent = () => {
  return (
    <Video>
      <IoVideocam size="20px" /> <span>Video</span>
    </Video>
  );
};

const Video = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  span {
    margin-left: 5px;
  }
`;

const ChatDetails = [
  {
    profileImg: elonMusk,
    chatName: "Elon Musk",
    recentChat: "Next is Etherum 😈",
    chatTime: "2:45 PM",
    unseenChats: "1",
    isUnseen: true,
  },
  {
    profileImg: divine,
    chatName: "DIVINE",
    recentChat: "Let's go to mumbai, to meet my MOM!",
    chatTime: "3:59 AM",
    unseenChats: "1",
    isUnseen: true,
  },
  {
    profileImg: snoopDog,
    chatName: "Snoop DOGG",
    recentChat: "Weed?",
    chatTime: "2:24 AM",
    isUnseen: false,
  },
  {
    profileImg: rajKundra,
    chatName: "Raj Kundra",
    recentChat: <VideoComponent />,
    chatTime: "11:56 PM",
    unseenChats: "150",
    isUnseen: true,
  },
  {
    profileImg: johnWick,
    chatName: "John Wick",
    recentChat: "Have you seen my DAWG?",
    chatTime: "1:00 AM",
    unseenChats: "1",
    isUnseen: true,
  },
  {
    profileImg: steveRogers,
    chatName: "Steve Rogers",
    recentChat: "I can do this all day 😎😎",
    chatTime: "7:56 PM",
    unseenChats: "2",
    isUnseen: true,
  },
  {
    profileImg: modi,
    chatName: "Shri Narendra Modi",
    recentChat: "Mitron!",
    chatTime: "4:00 AM",
    isUnseen: false,
  },
  {
    profileImg: kylieJenner,
    chatName: "Kylie Jenner",
    recentChat: "😘😘😘😘😘😘",
    chatTime: "7:56 PM",
    unseenChats: "2",
    isUnseen: true,
  },
  {
    profileImg: rajpalYadav,
    chatName: "Pappu",
    recentChat: "Thik hai bhai! ab mai chalta hu",
    chatTime: "1:25 PM",
    unseenChats: "1",
    isUnseen: true,
  },
  {
    profileImg: loki,
    chatName: "Loki",
    recentChat: "Sylvie 😭😭😭😭😭",
    chatTime: "5:08 PM",
    unseenChats: "1",
    isUnseen: false,
  },
];

const ChatRow = ChatDetails.map((ChatDetail) => (
  <Chat isUnseen={ChatDetail.isUnseen}>
    <ProfileImg src={ChatDetail.profileImg} alt="" />
    <ChatContent>
      <ChatNameTime>
        <ChatName>{ChatDetail.chatName}</ChatName>
        <ChatTime>{ChatDetail.chatTime}</ChatTime>
      </ChatNameTime>
      <ChatText>
        <RecentChat>{ChatDetail.recentChat}</RecentChat>
        {ChatDetail.isUnseen ? (
          <UnseenChat>{ChatDetail.unseenChats}</UnseenChat>
        ) : null}
      </ChatText>
    </ChatContent>
  </Chat>
));

function Chats() {
  return <ChatWrapper>{ChatRow}</ChatWrapper>;
}

export default Chats;
