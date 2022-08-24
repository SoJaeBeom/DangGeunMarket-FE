import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderLogo />
      <TextBox>
        <Transaction>중고거래</Transaction>
        <News>동네 소식</News>
      </TextBox>
      <LoginButton>로그인</LoginButton>
      <Signup>회원가입</Signup>
      <Chatting>채팅하기</Chatting>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 70px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
`;

const TextBox = styled.div`
  padding-right: 500px;
  padding-top: 6px;
`;

const Transaction = styled.span`
  font-family: 'a15';
  font-size: 18px;
  font-weight: 700;
  margin-right: 20px;
  color: #f7902b;
  cursor: pointer;
  &:hover {
    color: #e57a1a;
  }
`;

const News = styled.span`
  font-family: 'a15';
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  color: #f7902b;
  cursor: pointer;
  &:hover {
    color: #e57a1a;
  }
`;

const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  background: white;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  cursor: pointer;

  font-family: 'a15';
  font-size: 16px;
  font-weight: 600;

  &:hover {
    background: #f2f2f2;
  }
`;

const Signup = styled.button`
  width: 80px;
  height: 40px;
  background: white;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  cursor: pointer;

  font-family: 'a15';
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: #f2f2f2;
  }
`;

const Chatting = styled.button`
  width: 80px;
  height: 40px;
  background: white;
  border: 1px solid #bfbfbf;
  border-radius: 3px;
  cursor: pointer;

  font-family: 'a15';
  font-size: 16px;
  font-weight: 600;
  &:hover {
    background: #f2f2f2;
  }
`;
