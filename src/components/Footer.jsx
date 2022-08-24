import styled from 'styled-components';

export default function Footer() {
  return (
    <FooterContainer>
      <TextBox>
        <Text1>더 구경하고 싶나요?</Text1>
        <Text2>당근마켓 앱에서 따뜻한 거래를 직접 경험해보세요!</Text2>
        <Button1>App Store</Button1>
        <Button2>Google Play</Button2>
      </TextBox>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  height: 300px;
  background: #f8f9fa;
  display: flex;
`;

const TextBox = styled.div`
  width: 500px;
  height: 200px;
  margin: auto;
  flex-direction: column;
`;

const Text1 = styled.div`
  width: 200px;
  height: 50px;
  font-family: 'a19';
  font-size: 23px;
  margin: auto;
  margin-bottom: 30px;
`;

const Text2 = styled.div`
  width: 330px;
  height: 50px;
  font-family: 'a11';
  font-weight: 300;
  margin: auto;
`;

// const ButtonBox = styled.div`
//   width: 500px;
//   height: 80px;
//   display: flex;
//   margin: auto;
//   background: gray;
//   flex-direction: row;
// `;

const Button1 = styled.button`
  width: 160px;
  height: 50px;
  margin: auto;
  margin-left: 65px;
  border: none;
  border-radius: 6px;
  background: #ff8a3b;

  font-family: 'a19';
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ed8037;
  }
`;

const Button2 = styled.button`
  width: 160px;
  height: 50px;
  margin: auto;
  margin-left: 50px;
  border-radius: 6px;
  background: #ff8a3b;
  border: none;

  font-family: 'a19';
  font-size: 18px;
  font-weight: 500;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ed8037;
  }
`;
