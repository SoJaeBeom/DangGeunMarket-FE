import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import DetailContent from "../components/DetailContent";
import DetailImage from "../components/DetailImage";
import { __getDetailProduct } from "../redux/modules/detailProductSlice";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detailProduct, isLoading, isFinish } = useSelector(
    (state) => state.detailProduct
  );

  console.log(detailProduct, isLoading, isFinish);

  useEffect(() => {
    dispatch(__getDetailProduct(id));
  }, [dispatch, id]);

  if (isFinish) {
    return (
      <DetailBox>
        <DetailImage detailProduct={detailProduct} />
        <DetailContent detailProduct={detailProduct} />
      </DetailBox>
    );
  }
}

const DetailBox = styled.div``;
