import { Link } from 'react-router-dom';
import styled from 'styled-components';
import bulletinBanner from '../image/bulletinBanner.png';
import photo from '../image/photo.svg';
import { useNavigate } from 'react-router-dom';

export default function Bulletins({ bulletin }) {
  const navigate = useNavigate();
  return (
    <Container>
      <PostsImageBox>
        <PostsImage
          src={photo}
          style={{
            width: '200px',
            height: '200px',
            objectFit: 'cover',
          }}
          alt="heart"
        ></PostsImage>
      </PostsImageBox>
      <PostsTextBox>
        <PostsTitle>준비중...</PostsTitle>
        <PostsBox>
          <PostsNickname>당근</PostsNickname>
          <PostsLoc>서울 특별시</PostsLoc>
        </PostsBox>
      </PostsTextBox>
    </Container>
  );
}

const Container = styled.div`
  background: url(${bulletinBanner});
  background-position: center;
  background-size: cover;
  position: relative;
  text-align: left;
  display: flex;
  width: 850px;
  margin-right: 40px;
  margin-bottom: 40px;
  border-radius: 30px;
`;

const PostsImageBox = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;

  background-color: #f8f9fa;
  border-radius: 20px;
`;

const PostsImage = styled.img`
  height: 200px;

  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const PostsTextBox = styled.div`
  width: 450px;
  height: 200px;
  margin-left: 20px;
`;

const PostsTitle = styled.div`
  width: 450px;
  height: 50px;
  margin-top: 90px;

  font-family: 'a15';
  font-size: 40px;
  color: white;
`;

const PostsBox = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  margin-top: 20px;
  justify-content: flex-end;
`;

const PostsNickname = styled.div`
  width: 50px;
  height: 30px;
  font-family: 'a11';
  font-size: 25px;
  color: white;
`;

const PostsLoc = styled.div`
  width: 90px;
  height: 30px;
  padding-top: 10px;
  color: white;
`;
