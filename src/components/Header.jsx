import styled from 'styled-components';
import HeaderLogo from './HeaderLogo';
import { useNavigate } from 'react-router-dom';
import {
  getCookieToken,
  removeCookieToken,
  removeLocation,
  removeNickname,
} from '../storage/Cookie';

export default function Header() {
  const cookie = getCookieToken();
  const logout = () => {
    removeCookieToken();
    removeNickname();
    removeLocation();
    window.location.href = '/';
  };
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderLogo />
      {cookie ? (
        <>
          <TextBox>
            <Transaction
              onClick={() => {
                navigate('/posts');
              }}
            >
              중고거래
            </Transaction>
            <Life
              onClick={() => {
                navigate('/bulletin');
              }}
            >
              동네 생활
            </Life>
            <ProductAdd
              onClick={() => {
                navigate('/add');
              }}
            >
              상품 등록
            </ProductAdd>
          </TextBox>
          <LogoutButton
            onClick={() => {
              logout();
            }}
          >
            로그아웃
          </LogoutButton>

          <Chatting
            onClick={() => {
              navigate('/chatlist');
            }}
          >
            채팅하기
          </Chatting>
        </>
      ) : (
        <>
          <TextBox>
            <Transaction
              onClick={() => {
                navigate('/posts');
              }}
            >
              중고거래
            </Transaction>
            <Life
              onClick={() => {
                navigate('/bulletin');
              }}
            >
              동네 생활
            </Life>
            <ProductAdd
              onClick={() => {
                cookie !== undefined ? navigate('/add') : navigate('/signin');
              }}
            >
              상품 등록
            </ProductAdd>
          </TextBox>
          {/* navigate('/add'); */}
          <LoginButton
            onClick={() => {
              navigate('/signin');
            }}
          >
            로그인
          </LoginButton>
          <Signup
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입
          </Signup>
          <Chatting>채팅하기</Chatting>
        </>
      )}
    </HeaderContainer>
  );
}

// if (cookie == null) {
//   window.alert('로그인후 사용해주세요~');
// }

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
  margin-left: 15px;
  margin-right: 20px;
  color: #f7902b;
  cursor: pointer;
  &:hover {
    color: #e57a1a;
  }
`;

const ProductAdd = styled.span`
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

const Life = styled.span`
  font-family: 'a15';
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 20px;
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

const LogoutButton = styled.button`
  width: 80px;
  height: 40px;
  background: white;
  margin-left: 150px;
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
