import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SockJS from "sockjs-client";
import { getCookieToken, getNickname } from "../storage/Cookie";

export default function Chat() {
  const [message, setMessage] = useState("");
  const { detailProduct } = useSelector((state) => state.detailProduct);
  const roomId = useSelector((state) => state.chatSlice);
  const [messageList, setMessageList] = useState([]);
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
      roomId: roomId,
      nickname,
      message,
    };
    //예시 - 데이터 보낼때 json형식을 맞추어 보낸다.
    stompClient.send("/pub/chat/message", config, JSON.stringify(data));
  };

  const onChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const getList = async () => {
    const data = await axios.get(
      `http://3.35.22.118/chat/chatRoom/${nickname}`,
      configHttp
    );
    console.log("list is ::: ", data);
  };

  // const listReal = messageList.map((v, i) => {
  //   console.log(v.message);
  //   return <div>{v.message}</div>;
  // });

  return (
    <div>
      <input value={message} onChange={onChangeHandler} />
      <button onClick={sendMessage}>전송</button>
      <button onClick={getMessage}>조회</button>
      <button onClick={getList}>리스트조회</button>
      {messageList.map((value, index) => {
        <>
          <div>{value.message}</div>;
        </>;
      })}
    </div>
  );
}
