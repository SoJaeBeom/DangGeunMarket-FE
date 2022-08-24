import { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function DetailImage({ detailProduct }) {
  const settings = {
    dots: true,
    // 아래 점
    infinite: true,
    //슬라이드 끝까지 갔을때, 다음을 누를 경우 처음 슬라이드가 나온다.
    autoplay: true,
    speed: 800,
    //슬라이드 변경 시간
    slidesToShow: 1,
    //한번에 보이는 슬라이드 개수
    slidesToScroll: 1,
    //한번 이동할 때 넘어가는 슬라이드 개수
    autoplaySpeed: 3000,
    //자동 재생 유지 시간
    pauseOnHover: true,
  };

  return (
    <div>
      <Header />
      <DetailSlideBox>
        <Slider {...settings}>
          {detailProduct.imgProductList.map((image, index) => (
            <DetailImageItem
              key={index}
              src={image.imgUrl}
              alt="이미지_슬라이더"
            />
          ))}
        </Slider>
      </DetailSlideBox>
    </div>
  );
}

const DetailSlideBox = styled.div`
  width: 37.5rem;
  height: 34.375rem;
  margin: auto;
  overflow-x: hidden;
  margin-top: 3.125rem;
  border-radius: 20px;
`;

const DetailImageItem = styled.img`
  width: 500px;
  height: 500px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 20px;
`;
