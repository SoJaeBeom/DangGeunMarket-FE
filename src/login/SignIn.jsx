import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { setAccessToken, setLocation, setNickname } from '../storage/Cookie';
import danggeunlogo from '../image/danggeunlogo.png';

export default function SignIn() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const { username, password } = loginInfo;

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

  const login = async () => {
    try {
      let res = await axios({
        method: 'POST',
        url: 'http://3.35.22.118/user/login',
        data: {
          username,
          password,
        },
        withCredentials: true,
      });
      setLocation(res.data.data.location);
      setNickname(res.data.data.nickname);
      setAccessToken(res.headers.access_token);

      axios.defaults.headers.common[
        'Authorization'
      ] = `${res.headers.authorization}`;
      alert('당근마켓에 오신걸 환영합니다!!');
      return navigate('/');
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <StContainer>
      <StDanggeunimage>
        <div className="btnStart">
          <img
            src={danggeunlogo}
            onClick={() => {
              navigate('/');
            }}
            alt="btnStart"
          />
        </div>
      </StDanggeunimage>
      <StHeader>로그인</StHeader>
      <StIdPwdInput
        id="userid"
        placeholder="아이디를 입력해주세요"
        type="text"
        value={username}
        name="username"
        onChange={onChangeHandler}
      />
      <StIdPwdInput
        id="password"
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={password}
        name="password"
        onChange={onChangeHandler}
      />
      <StBtnContainer>
        <StLoginBtn onClick={login}>로그인</StLoginBtn>
      </StBtnContainer>
    </StContainer>
  );
}

const StDanggeunimage = styled.image`
  img {
    width: 130px;
    height: 130px;
    background-position: center;
    background-size: cover;
    margin-top: 100px;
  }
  cursor: pointer;
`;

const StContainer = styled.div`
  width: 340px;
  margin: 0px auto;
  letter-spacing: -0.6px;
  margin-bottom: 5px;
  text-align: center;
`;

const StHeader = styled.div`
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: #fa6616;
  margin-top: 50px;
`;

const StIdPwdInput = styled.input`
  height: 54px;
  font-size: 14px;
  width: 100%;
  height: 46px;
  padding: 0px 11px 1px 15px;
  border-radius: 4px;
  border: 1px solid rgb(221, 221, 221);
  font-weight: 400;
  // font-size: 16px;
  line-height: 1.5;
  color: rgb(51, 51, 51);
  // outline: none;
  box-sizing: border-box;
  // margin-bottom: 5px;
  margin-top: 30px;
`;

const StBtnContainer = styled.div`
  margin-top: 28px;
`;

const StLoginBtn = styled.button`
  display: block;
  padding: 0px 10px;
  text-align: center;
  overflow: hidden;
  width: 100%;
  height: 54px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  background-color: #fa6616;
  border: 0px none;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
