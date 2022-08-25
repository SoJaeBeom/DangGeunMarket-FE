import React, { useEffect } from "react";
import styled from "styled-components";
import Chatlogo from "../image/Chatlogo.png";
import { useNavigate } from "react-router-dom";
import photo from "../image/photo.svg";
import bulletinBanner from "../image/bulletinBanner.png";
import search from "../image/search.png";
import chat from "../image/chat.png";
import footeriamge from "../image/footerimage.svg";
import { useDispatch, useSelector } from "react-redux";
import { __getList } from "../redux/modules/chatSlice";

export default function ChatList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.chatSlice);

  useEffect(() => {
    dispatch(__getList());
  }, [dispatch]);

  const lists = state.list?.map((v, i) => {
    console.log(v.roomId, i);
    return v.roomId;
  });
  const moveToRoom = () => {
    console.log("ajjo");
  };

  return (
    <ChatContainer>
      <ChatBox>
        <Chatimage
          onClick={() => {
            navigate("/");
          }}
        />
        <ChatTextBox>
          <ChatTitle>채팅 목록▼</ChatTitle>
          <Icon1 />
          <Icon2 />
        </ChatTextBox>

        <ChatRoom>
          <ProfileBox />
          <RoomNumber onClick={moveToRoom}>{lists}</RoomNumber>
        </ChatRoom>

        <Footer>
          <Link>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko"
              rel="noreferrer"
            >
              앱 다운로드 하기 〉
            </a>
          </Link>
        </Footer>
      </ChatBox>
    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  width: 100%;
  background: #ffa267;
`;

const ChatBox = styled.div`
  width: 600px;
  margin: auto;
  background: white;
  border-radius: 30px;
`;

const Chatimage = styled.div`
  width: 400px;
  height: 90px;
  margin: auto;

  background: url(${Chatlogo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const ChatTextBox = styled.div`
  width: 500px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  font-family: "a15";
  font-size: 15px;

  margin: auto;
  margin-top: 20px;
`;

const ChatTitle = styled.div`
  width: 200px;
  height: 30px;

  font-family: "a19";
  font-size: 22px;
  color: #f7902b;
`;

const Icon1 = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 210px;
  background: url(${search});
  background-position: center;
  background-size: cover;
`;

const Icon2 = styled.div`
  width: 30px;
  height: 30px;

  background: url(${chat});
  background-position: center;
  background-size: cover;
`;

const ChatRoom = styled.div`
  width: 500px;
  height: 120px;
  margin: auto;
  display: flex;
  border-radius: 30px;
  background: url(${bulletinBanner});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: 35px;
`;

const ProfileBox = styled.div`
  width: 80px;
  height: 80px;
  background: red;
  margin-top: 20px;
  margin-left: 20px;

  background: url(${photo});
  background-position: center;
  background-size: cover;
  border-radius: 50px;
`;

const RoomNumber = styled.div`
  width: 200px;
  height: 30px;
  margin-top: 25px;
  margin-left: 20px;

  font-family: "a15";
  font-size: 20px;
  color: white;
`;

const Footer = styled.div`
  width: 600px;
  height: 130px;
  border-radius: 30px;
  display: flex;
  margin-top: 110px;
  background: url(${footeriamge});
  background-position: center;
  background-size: cover;
`;

const Link = styled.div`
  width: 150px;
  height: 25px;
  margin-top: 90px;
  margin-left: 40px;
  cursor: pointer;

  font-family: "a19";
  font-size: 18px;
  color: #0c7eab;
`;
