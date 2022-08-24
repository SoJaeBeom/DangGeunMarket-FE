import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";

export default function Chat() {
  const [message, setMessage] = useState("");
  const { detailProduct } = useSelector((state) => state.detailProduct);
  const [returnMessage, setReturnMessage] = useState("");
  console.log("detailProduct is :: ", detailProduct);

  const config = {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxNDAzODQxfQ.GVqRnQ42Ndluz0SuWwlKWSTizF5COXm23lNvKN3mHaQ",
  };

  const configHttp = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxNDAzODQxfQ.GVqRnQ42Ndluz0SuWwlKWSTizF5COXm23lNvKN3mHaQ",
    },
  };

  const socket = new SockJS("http://54.180.2.97/ws");
  const stompClient = Stomp.over(socket);

  console.log("socket is ::", socket);
  console.log("stompClient is ::", stompClient);

  // useEffect(() => {
  //   stompConnect();
  //   // return () => {
  //   //   stompDisConnect();
  //   // };
  // });

  // 웹소켓 연결, 구독
  const stompConnect = () => {
    console.log("stompConnect");
    try {
      stompClient.connect(
        config,
        () => {
          stompClient.subscribe(
            "/sub/chat/room/0eb08e5a-389a-4ab9-be59-0efe64b10406",
            (data) => {
              console.log(data.body);
              const returnMessage = JSON.parse(data.body);
              setReturnMessage(returnMessage.message);
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

  // 웹소켓 연결 해제, 구독 해제
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

  stompConnect();

  // const createRoom = async () => {
  //   console.log("createRoom!!!!!!!!!!!!!");
  //   const data = await axios.post(
  //     "http://54.180.2.97/chat/chatRoom",
  //     {
  //       nickname: "당근이",
  //       productId: 16,
  //     },
  //     config
  //   );
  //   console.log("data is ::", data);
  // };

  // createRoom();

  const getMessage = async () => {
    const data = await axios.get(
      "http://54.180.2.97/chat/chatMessage/당근이/2",
      configHttp
    );
    console.log(data);
  };

  const sendMessage = () => {
    // stompClient.debug = null;

    // createRoom();

    const data = {
      roomId: "0eb08e5a-389a-4ab9-be59-0efe64b10406",
      nickname: "당근이",

      // createdAt: now,
      message,
    };
    //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
    stompClient.send("/pub/chat/message", config, JSON.stringify(data));
  };

  // sendMessage();

  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setMessage(event.target.value);
  };

  return (
    <div>
      <input value={message} onChange={onChangeHandler} />
      <button onClick={sendMessage}>전송</button>
      <button onClick={getMessage}>조회</button>
      <div>{returnMessage}</div>
    </div>
  );

  // 방 존재 확인
  //
}
