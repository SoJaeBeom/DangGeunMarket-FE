import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import { getCookieToken, getNickname } from "../storage/Cookie";
import xicon from "../image/xicon.png";
import back from "../image/back.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [message, setMessage] = useState("");
  const { detailProduct } = useSelector((state) => state.detailProduct);
  const roomId = useSelector((state) => state.chatSlice);
  const [messageList, setMessageList] = useState([]);
  const navigate = useNavigate();
  console.log("data is :: ", detailProduct, roomId);

  const config = {
    Authorization: getCookieToken(),
  };

  const configHttp = {
    headers: {
      Authorization: getCookieToken(),
    },
  };

  const socket = new SockJS("http://3.35.22.118/ws");
  const stompClient = Stomp.over(socket);

  // console.log("socket is ::", socket);
  // console.log("stompClient is ::", stompClient);

  useEffect(() => {
    stompConnect();
    // return () => {
    //   stompDisConnect();
    // };
  });

  // useEffect(() => {
  //   getMessage();
  // }, [returnMessage]);

  // 웹소켓 연결, 구독
  const stompConnect = () => {
    try {
      stompClient.connect(
        config,
        () => {
          stompClient.subscribe(
            `/sub/chat/room/${roomId}`,
            (data) => {
              const returnMessage = JSON.parse(data.body);
              console.log(returnMessage);
              setMessageList(returnMessage.message);
            },
            config
          );
        },
        () => {
          console.log("failed");
        }
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // // 웹소켓 연결 해제, 구독 해제
  // const stompDisConnect = () => {
  //   console.log("stompDisConnect");
  //   try {
  //     // stompClient.debug = null;
  //     stompClient.disconnect(() => {
  //       stompClient.unsubscribe("sub-0");
  //     }, config);
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // };

  const nickname = getNickname();
  const getMessage = async () => {
    const data = await axios.get(
      `http://3.35.22.118/chat/chatMessage/${nickname}/${detailProduct.id}`,
      configHttp
    );
    // const data = await axios.get(
    //   `http://3.35.22.118/chat/chatMessage/당근이/16`,
    //   configHttp
    // );
    console.log(data.data.data);
    if (data.data.data.length === 0) {
      setMessageList([]);
    } else {
      setMessageList(data.data.data);
    }
  };

  const sendMessage = () => {
    const data = {
      roomId: roomId.list[0].roomId,
      nickname,
      message,
    };
    //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
    stompClient.send("/pub/chat/message", config, JSON.stringify(data));
    getMessage();
  };

  const onChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  // const listReal = messageList.map((v, i) => {
  //   console.log(v.message);
  //   return <div>{v.message}</div>;
  // });

  const lis = messageList.map((value, index) => {
    console.log("aaaaaa", value.message);
    return value.message;
  });

  return (
    <Container>
      <Box>
        <ExitBox>
          <Exitimg
            onClick={() => {
              navigate(-1);
            }}
          />
        </ExitBox>
        <InputBox>
          <ChatInput value={message} onChange={onChangeHandler} />
          <AddButton onClick={sendMessage}>전송</AddButton>
        </InputBox>
        <TextBox>
          <MsgDiv>{lis + "\n"}</MsgDiv>
        </TextBox>
      </Box>
    </Container>
  );
}

const MsgDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  background: #f39d66;
`;

const Box = styled.div`
  height: 100vh;
  background: url(${back});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 1200px) {
    background-size: cover;
  }
`;

const ExitBox = styled.div`
  width: 540px;
  height: 30px;
  margin: auto;
  display: flex;
  justify-content: flex-end;
`;

const Exitimg = styled.div`
  width: 15px;
  height: 15px;
  margin-top: 10px;
  background: url(${xicon});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    margin-right: 14px;
  }
`;

const InputBox = styled.div`
  width: 576px;
  height: 80px;
  background: green;
  margin: auto;
  display: flex;
  margin-top: 89px;
  position: relative;
  @media screen and (max-width: 1200px) {
    margin-top: 80px;
    width: 546px;
  }
`;

const TextBox = styled.div`
  width: 578px;
  height: 527px;
  background: #f26944;
  margin: auto;
  @media screen and (max-width: 1200px) {
    width: 546px;
    height: 480px;
  }
`;

const ChatInput = styled.textarea`
  width: 450px;
  height: 80px;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;

  font-family: "a11";
  font-weight: 600;
  font-size: 20px;
`;

const AddButton = styled.div`
  width: 130px;
  height: 80px;
  background: #148c75;
  text-align: center;
  padding-top: 25px;
  box-sizing: border-box;

  font-family: "DX국민";
  font-weight: 800;
  font-size: 25px;
  cursor: pointer;
  :hover {
    background: #0e6857;
  }
`;
