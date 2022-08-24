import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import DetailContent from "../components/DetailContent";
import DetailImage from "../components/DetailImage";
import { __getDetailProduct } from "../redux/modules/detailProductSlice";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { detailProduct, isLoading, isFinish } = useSelector(
    (state) => state.detailProduct
  );

  console.log(detailProduct);

  const config = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNjYxMzE3NDg0fQ.6YHP_dOKM8jDAN_oYqGETDT54oVS5m6bPC3hhE4Z2-0",
    },
  };

  useEffect(() => {
    dispatch(__getDetailProduct(id));
  }, [dispatch, id]);

  const checkRoom = async () => {
    // 방 존재 유무 확인
    // /chat/check :: get
    // req : url 로 {nickname, productId}
    // res : {success , data}

    // 방이 존재 : success = true
    // /chat/chatMessage :: get
    // req : url 로 {nickname, productId}
    // res : {success, data -> nickname, roomId, message}

    // 방이 없음 : success = false
    // /chat/chatRoom :: post
    // req : body 로 {nickname, productId}
    // res : {success, roomId}
    try {
      await axios
        .get(
          `http://54.180.2.97/chat/check/${detailProduct.nickname}/${detailProduct.id}`,
          config
        )
        .then((res) => {
          console.log(res);
          // return res;
        })
        .finally((res) => {
          console.log("finally", res);
          // if (res.success === true) {
          //   const data = axios.get(
          //     `http://54.180.2.97/chat/check/${detailProduct.nickname}/${detailProduct.id}`,
          //     config
          //   );
          //   console.log(data);
          // } else {
          //   const data = axios.post(
          //     `http://54.180.2.97/chat/chatRoom`,
          //     { reqData },
          //     config
          //   );
          //   console.log(data);
          // }
        });
      // console.log("data is :::", data);
      // navigate("/chat");
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  if (isFinish) {
    return (
      <DetailBox>
        <DetailImage detailProduct={detailProduct} />
        <DetailContent detailProduct={detailProduct} />
        <button onClick={checkRoom}>채팅하기</button>
      </DetailBox>
    );
  }
}

const DetailBox = styled.div``;
