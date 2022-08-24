import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgPath from '../image/항해99.jpeg';
import heartPath from '../image/heart_blank.png';

export default function Posts({ product }) {
  return (
    <PostsBox>
      <Link to={`/detail/${product.id}`}>
        <PostsDescImgSection>
          <PostsDescImg src={imgPath} alt="항해" />
        </PostsDescImgSection>
        <PostsDescInfoSection>
          <PostsDescTitle>{product.name}</PostsDescTitle>
          <PostsDescLocal>{product.location}</PostsDescLocal>
          <PostsDescPrice>{product.price} 원</PostsDescPrice>
          <PostsDescLike src={heartPath} alt="heart" />
          10
        </PostsDescInfoSection>
      </Link>
    </PostsBox>
  );
}

const PostsBox = styled.div`
  position: relative;
  text-align: left;
  display: inline-block;
  width: 217px;
  margin-right: 34px;
  margin-bottom: 40px;
`;
const PostsDescImgSection = styled.div`
  height: 160px;
  overflow: hidden;
  background-color: #f8f9fa;
  border-radius: 8px;
`;
const PostsDescImg = styled.img`
  height: 160px;
  display: block;
`;
const PostsDescInfoSection = styled.div``;
const PostsDescTitle = styled.span`
  display: block;
  font-weight: 600;
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
`;
const PostsDescPrice = styled.p`
  font-weight: 600;
  color: #ff8a3d;
  font-size: 15px;
  line-height: 18px;
  margin-top: 6px;
`;
const PostsDescLike = styled.img`
  width: 15px;
`;
