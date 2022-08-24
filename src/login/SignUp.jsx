import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
  // 아이디, 닉네임, 지역, 비밀번호, 비밀번호 확인
  const [userId, setUserId] = useState("");
  const [nickname, setNickName] = useState("");
  const [location, setLoCation] = useState("");
  const [password, setPassWord] = useState("");
  const [confirmpwd, setConFirmPwd] = useState("");

  // 오류메시지 상태
  const [userIdError, setUserIdError] = useState(false);
  const [nicknameError, setNickNameError] = useState(false);
  const [locationError, setLoCationError] = useState(false);
  const [passwordError, setPassWordError] = useState(false);
  const [confirmpwdError, setConFirmPwdError] = useState(false);

  
  const navigate = useNavigate();
  
  // 아이디
  const onChangeUserId = (event) => {
    const userIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!event.target.value || userIdRegex.test(event.target.value)) {
      setUserIdError(false);
    } else {
      setUserIdError(true);
    }
    setUserId(event.target.value);
  };
  console.log();
  
  // 닉네임
  const onChangeNickName = (event) => {
    if (!event.target.value) {
      setNickNameError(false);
    } else{
      setNickNameError(true);
    }
      setNickName(event.target.value)
  }
  
  // 지역
  const onChangeLoCation = (event) => {
    if (!event.target.value) {
      setLoCationError(false);
    } else {
      setLoCationError(true);
    }
    setLoCation(event.target.value)
}
  
  // 비밀번호
  const onChangePassWord = (event) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;   
    if (!event.target.value || passwordRegex.test(event.target.value)) {
      setPassWordError(false);
      
    } else {
      setPassWordError(true);
    }
    if (!confirmpwd || event.target.value === confirmpwd) {
      setConFirmPwdError(false);
    } else {
      setConFirmPwdError(true);
    }
    setPassWord(event.target.value)
  }
  
  // 비밀번호 확인
  const onChangeConFirmPwd = (event) => {
    if (password === event.target.value) {
      setConFirmPwdError(false);
    } else {
      setConFirmPwdError(true);
    }  
    setConFirmPwd(event.target.value)
  }
  const validation = () => {
    if (!userId) setUserIdError(true);  // 유저아이디가 빈문자열이면 유저아이디에러를 트루로 바꿈
    if (!password) setPassWordError(true);
    if (!confirmpwd) setConFirmPwdError(true);
    console.log("validation", userIdError, nicknameError, locationError, passwordError, confirmpwdError);
    if (
      userId &&
      password &&
      confirmpwd &&
      !userIdError &&
      !passwordError &&
      !confirmpwdError
    ) {
      return true;
    } else {
      return false;
    }
    
  };

  
  
  const onSubmitHandler = async () => {
    if (validation()) {
      try {
        const data = await axios.post("http://54.180.2.97/user/signup", {
          
          username: userId,
          nickname,
          location,
          password,
          
        });
        console.log(data);
      } catch (error) {
        throw new Error(error);
      }
      
      alert("회원 가입 완료하였습니다!!");
      setUserId("");
      setPassWord("");
      setConFirmPwd("");
      setNickName("");
      setLoCation("");
      navigate("/signin");
      return;
      
    } else {
      alert("입력 정보를 다시 확인하세요!!");
    }
    
  };
  
  
  return(
   <StLayout> 
    <StHeader>회원가입</StHeader>
    <StLine>
      <StHeader1>*</StHeader1> 
      필수입력사항
    </StLine>
    <StListContainer>
      <StIdForm>
        <StIdBox>
          <StIdLabel>
            아이디
            <StHeader1>*</StHeader1>
          </StIdLabel>
        </StIdBox>
      </StIdForm>
      <StInputForm>
        {/* 아이디 에러 */}
        
      {userIdError ? (
      <>
      <StInput 
        id="userId_error" 
        placeholder="아이디를 입력해주세요" 
        type="text" 
        value={userId}
        onChange={onChangeUserId}
        />
        <ErrorMessage>사용자 ID는 5자 이상이어야 하며 문자 또는 숫자를 포함해주세요.</ErrorMessage>
        </>
      ) : (
        <StInput
          id="userId"
          placeholder="아이디를 입력해주세요" 
          type="text"
          value={userId}
          onChange={onChangeUserId}
          />
        )}
        
      </StInputForm>
      <StIdBtn type="button">
        중복확인
      </StIdBtn>
    </StListContainer>
    
    <StListContainer>
      <StIdForm>
        <StIdBox>
          <StIdLabel>
            닉네임
            <StHeader1>*</StHeader1>
          </StIdLabel>
        </StIdBox>
      </StIdForm>
      <StInputForm>
      <StInput  
      id="nickname" 
      placeholder="닉네임을 입력해주세요" 
      value={nickname}
      onChange={onChangeNickName}
      /> 
      </StInputForm>
      <StIdBtn type="button">
        중복확인
      </StIdBtn>
    </StListContainer>

    <StListContainer>
      <StIdForm>
        <StIdBox>
          <StIdLabel>
            지역
            <StHeader1>*</StHeader1>
          </StIdLabel>
        </StIdBox>
      </StIdForm>
      <StInputForm>
      <StInput 
      id="location" 
      placeholder="서울특별시"
      value={location} 
      onChange={onChangeLoCation}
      /> 
      </StInputForm>
    </StListContainer>

    <StListContainer>
      <StIdForm>
        <StIdBox>
          <StIdLabel>
            비밀번호
            <StHeader1>*</StHeader1>
          </StIdLabel>
        </StIdBox>
      </StIdForm>
      <StInputForm>
      {passwordError ? (
      <>
      <StInput 
      id="password_error"  
      placeholder="비밀번호를 입력해주세요" 
      type="password" 
      value={password}
      onChange={onChangePassWord}
      /> 
      <ErrorMessage>비밀번호는 8자 이상이어야 하며 문자와 숫자 1자 이상을 포함해주세요.</ErrorMessage>
      </>
      ) : (
      <StInput 
      id="password"  
      placeholder="비밀번호를 입력해주세요" 
      type="password" 
      value={password}
      onChange={onChangePassWord}
      /> 
      )}
      </StInputForm>
    </StListContainer>

    <StListContainer>
      <StIdForm>
        <StIdBox>
          <StIdLabel>
            비밀번호 확인
            <StHeader1>*</StHeader1>
          </StIdLabel>
        </StIdBox>
      </StIdForm>
      <StInputForm>
      {confirmpwdError ? (
      <>
      <StInput 
      id="confirmpwd_error" 
      placeholder="비밀번호를 한번 더 입력해주세요" 
      value={confirmpwd}
      type="password"
      onChange={onChangeConFirmPwd}
      /> 
      <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
      </>
    ) : (
      <StInput
      id="confirmpwd" 
      placeholder="비밀번호를 한번 더 입력해주세요" 
      value={confirmpwd}
      type="password"
      onChange={onChangeConFirmPwd}
      /> 
    )}
      </StInputForm>
    </StListContainer>

    <StSignUpbtn 
    type="submit" 
    width="240" 
    radius="3" 
    onClick={onSubmitHandler}>
      회원가입하기
    </StSignUpbtn>
    <StLine></StLine>
  </StLayout>
  );
}



const StHeader = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
  text-align: center;
  letter-spacing: -1px;
  color: #ff7e36;
`;

const StLine = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid #ff7e36;
  font-size: 12px;
  color: rgb(102, 102, 102);
  line-height: 17px;
  text-align: right;
  
`;

const StHeader1 = styled.label`
  color: rgb(238, 106, 123);
  // box-sizing: border-box;
  // margin: 0;
  // font-size: 12px;
  // color: rgb(102, 102, 102);
  // line-height: 17px;
  // text-align: right;
`;

const StLayout = styled.div`
  width: 640px;
  margin: 0px auto;
  box-sizing: border-box;
`;

const StListContainer = styled.div`
  margin: 0px;
  // font-size: 14px;
  color: #333;
  user-select: none;
  // padding: 0;
  display: inline-flex;
  width: 100%;
  padding: 10px 20px;
`;

const StIdForm = styled.div`
  display: inline-flex;
  // width: 100%;
  // padding: 10px 20px;
  
`;

const StIdBox = styled.div`
  width: 100px;
  padding-top: 12px;
  
`;

const StIdLabel = styled.label`
  font-weight: 550;
  color: #ff7e36;
  line-height: 20px;
  
`;

const StInputForm = styled.div`
  // position: relative;
  //   height: 48px;
  width: 150%;
`;

const StInput = styled.input`
  // flex: 1 1 0%;
  // padding-bottom: 0px;
  // position: relative;
    height: 48px;
    width: 80%;
    height: 46px;
    padding: 0px 11px 1px 15px;
    border-radius: 4px;
    border: 1px solid rgb(221, 221, 221);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: rgb(51, 51, 51);
    // outline: none;
    box-sizing: border-box;
    bottom: 20px;
    
`;

const StIdBtn = styled.button`
width: 250px;
    margin-left: 8px;
height: 44px;
// border-radius: 3px;
display: block;
    padding: 0px 10px;
    text-align: center;
    overflow: hidden;
    // width: 100%;
    // height: 52px;
    border-radius: 6px;
    color: #fa6616;
    background-color: rgb(255, 255, 255);
    border: 1px solid #fa6616;;
    font-weight: 550;
    font-size: 14px;
    cursor: pointer;
    display: block;
    line-height: 1.15
`;    

const StSignUpbtn = styled.button`
  // display: block;
  padding: 0px 10px;
  // text-align: center;
  // overflow: hidden;
  width: 240px;
  height: 56px;
  border-radius: 3px;
  color: #ffe2d2;
  background-color: #fa6616;
  border: 0px none;
  display: inline-block;
  font-size: 16px;
  font-weight: 550;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 530;
`;