import { Link } from 'react-router-dom';
import styled from 'styled-components';
import heart from '../image/heart.svg';

export default function Posts({ product }) {
  return (
    <PostsBox>
      <Link to={`/detail/${product.id}`}>
        <PostsDescImgSection>
          <PostsDescImg
            src={product.imgProductList[0].imgUrl}
            alt="heart"
          ></PostsDescImg>
        </PostsDescImgSection>
        <PostsDescInfoSection>
          <PostsDescTitle>{product.name}</PostsDescTitle>
          <PostsDescPrice>{product.price} 원</PostsDescPrice>
          <PostsDescLocal>{product.location}</PostsDescLocal>
          <PostsDescLike src={heart} alt="heart" />
          <PostsDescLikeText>관심 10</PostsDescLikeText>
        </PostsDescInfoSection>
      </Link>
    </PostsBox>
  );
}

// src={product.imgProductList[0]}

const PostsBox = styled.div`
  position: relative;
  text-align: left;
  display: inline-block;
  width: 15.625rem;
  margin-right: 35px;
  padding-left: 40px;
  margin-bottom: 40px;
`;
const PostsDescImgSection = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  background-color: #f8f9fa;
  border-radius: 8px;
`;
const PostsDescImg = styled.img`
  height: 200px;
  display: block;
  background-position: center;
  background-size: cover;

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;
const PostsDescInfoSection = styled.div`
  padding-top: 10px;
`;
const PostsDescTitle = styled.span`
  display: block;
  font-family: 'a11';
  color: #212529;
  font-size: 16px;
  line-height: 18px;
  margin-top: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const PostsDescLocal = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
  color: #868e96;
  padding-top: 10px;
`;
const PostsDescPrice = styled.p`
  font-weight: 600;
  color: #ff8a3d;
  font-size: 15px;
  line-height: 18px;
  margin-top: 6px;
  padding-top: 5px;
`;
const PostsDescLike = styled.img`
  width: 10px;
  padding-top: 5px;

  font-family: 'a11';
  font-size: 12px;
`;

const PostsDescLikeText = styled.span`
  font-family: 'a11';
  font-size: 13px;
  padding-left: 5px;
`;
