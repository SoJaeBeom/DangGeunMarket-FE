import { useState } from "react";
import styled from "styled-components";

export default function DetailImage({ detailProduct }) {
  console.log("DetailImage!!! ", detailProduct.imgProductList);
  const imageData = {
    imgPathList: [
      "https://cdn.stocksnap.io/img-thumbs/960w/PS7M4VMB9P.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/KLSTPV1LBV.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/N06ELOLAT9.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/YN0MX9OUSY.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/JVBWZNCQLW.jpg",
      "https://cdn.stocksnap.io/img-thumbs/960w/LN6MZNMBUR.jpg",
    ],
  };

  const [slideIndex, setSlideIndex] = useState(0);

  const showDivs = (idx) => {
    const index = detailProduct.imgProductList.length - 1;
    if (-1 < idx && idx === index) {
      setSlideIndex(idx);
    } else if (idx < 0) {
      setSlideIndex(detailProduct.imgProductList.length - 1);
    } else if (idx > index) {
      setSlideIndex(0);
    } else if (idx < index) {
      setSlideIndex(idx);
    }
  };

  const onPrev = () => {
    showDivs(slideIndex - 1);
  };

  const onNext = () => {
    showDivs(slideIndex + 1);
  };

  const currentDivs = (idx) => {
    showDivs(idx);
  };

  return (
    <div>
      <DetailImageSlide>
        <DetailSlideBox>
          <DetailSlideList
            style={{
              transform: `translateX(
            ${slideIndex * -500}px`,
            }}
          >
            <DetailSlideContent>
              {detailProduct.imgProductList.map((image, index) => (
                <DetailImageItem
                  key={index}
                  src={image.imgUrl}
                  alt="이미지_슬라이더"
                />
              ))}
            </DetailSlideContent>
          </DetailSlideList>
        </DetailSlideBox>
        <IndicatorBtnContainer>
          <PrevBtn onClick={() => onPrev(-1)}>&#10094;</PrevBtn>
          <NextBtn onClick={() => onNext(1)}>&#10095;</NextBtn>
          {detailProduct.imgProductList.map((image, index) => (
            <Dot key={index} onClick={currentDivs} />
          ))}
        </IndicatorBtnContainer>
      </DetailImageSlide>
    </div>
  );
}

const DetailImageSlide = styled.div`
  width: 500px;
  margin: auto;
`;
const DetailSlideBox = styled.div`
  width: 100%;
  margin: auto;
  overflow-x: hidden;
`;

const DetailSlideList = styled.div`
  width: 3000px;
  height: 330px;
  overflow: hidden;
`;
const DetailSlideContent = styled.div`
  display: flex;
  float: left;
  width: 500px;
  height: 500px;
`;

const DetailImageItem = styled.img`
  width: 100%;
  object-fit: cotain;
  height: auto;
`;

const IndicatorBtnContainer = styled.div`
  text-align: center;
`;

const PrevBtn = styled.div`
  cursor: pointer;
  float: left;
  &:hover {
    color: #eee;
  }
`;

const NextBtn = styled.div`
  cursor: pointer;
  float: right;
  &:hover {
    color: #eee;
  }
`;
const Dot = styled.span`
  height: 15px;
  width: 15px;
  padding: 0;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  color: #fff;
  display: inline-block;
  border: 1px solid #ccc;
  background-color: ${(prop) => (prop.active ? "#fff" : "transparent")};
  &: hover {
    color: #000 !important;
    background-color: #fff;
  }
`;
