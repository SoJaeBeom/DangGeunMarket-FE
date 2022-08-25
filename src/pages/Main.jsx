import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homeicon1 from '../image/homeicon1.png';
import homeicon2 from '../image/homeicon2.png';
import homeicon3 from '../image/homeicon3.png';

export default function Main() {
  return (
    <MainContainer>
      <Header />
      <Back1>
        <Wrap1>
          <div>
            <Title1>
              당신 근처의
              <br />
              당근마켓
            </Title1>
            <Desc1>
              <br />
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </Desc1>
          </div>
          <img
            alt=""
            style={{ height: '700px' }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-68ba12f0da7b5af9a574ed92ca8b3a9c0068db176b566dd374ee50359693358b.png"
          />
        </Wrap1>
      </Back1>
      <Back2>
        <Wrap2>
          <img
            alt=""
            style={{ height: '700px' }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-39ac203e8922f615aa3843337871cb654b81269e872494128bf08236157c5f6a.png"
          />
          <div>
            <Title2>
              우리 동네
              <br />
              중고 직거래 마켓
            </Title2>
            <Desc2>
              <br />
              동네 주민들과 가깝고 따뜻하게 거래를 지금 경험해보세요.
              <br />
            </Desc2>
            <div>
              <Button1>인기매물 보기</Button1>
              <Button2>믿을 수 있는 중고거래</Button2>
            </div>
          </div>
        </Wrap2>
      </Back2>
      <Back3>
        <Wrap3>
          <div>
            <Title3>
              이웃과 함께하는
              <br />
              동네생활
              <br />
            </Title3>
            <Desc3>
              <br />
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </Desc3>
            <div style={{ display: 'flex' }}>
              <Li>
                <br />
                <img style={{ width: '60px' }} src={homeicon1} alt="" />
                <DescTitle>우리동네질문</DescTitle>
                <br />
                <Desc>궁금한 게 있을 땐 이웃에게 물어보세요.</Desc>
              </Li>
              <Li>
                <br />
                <img style={{ width: '60px' }} src={homeicon2} alt="" />
                <DescTitle>동네분실센터</DescTitle>
                <br />
                <Desc>무언가를 잃어버렸을 때, 함께 찾을 수 있어요.</Desc>
              </Li>
              <Li>
                <br />
                <img style={{ width: '60px' }} src={homeicon3} alt="" />
                <DescTitle>동네모임</DescTitle>
                <br />
                <Desc> 관심사가 비슷한 이웃과 온오프라인으로 만나요.</Desc>
              </Li>
            </div>
          </div>
          <img
            alt=""
            style={{ height: '700px' }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-f286322ab98acedf914a05bf77e84c67dcb897c8ccb543e66f6afea9d366d06d.png"
          />
        </Wrap3>
      </Back3>
      <Back2>
        <Wrap2>
          <img
            alt=""
            style={{ height: '700px' }}
            src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp"
          />
          <div>
            <Title4>
              내 근처에서 찾는
              <br />
              동네가게
            </Title4>
            <Desc4>
              <br />
              우리 동네 가게를 찾고 있나요?
              <br />
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </Desc4>
            <Button3>당근마켓 동네 가게 찾기</Button3>
          </div>
        </Wrap2>
      </Back2>

      <Footer />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
const Back1 = styled.div`
  background-color: rgb(251, 247, 242);
  display: flex;
  align-items: center;
  padding-top: 20px;
`;

const Wrap1 = styled.div`
  background-color: rgb(251, 247, 242);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin: auto;
`;

const Title1 = styled.div`
  font-family: 'a15';
  font-weight: 600;
  font-size: 48px;
`;

const Desc1 = styled.div`
  font-family: 'a11';
  font-size: 15px;
`;

const Back2 = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrap2 = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
`;

const Title2 = styled.div`
  font-family: 'a15';
  font-weight: 600;
  font-size: 48px;
`;

const Desc2 = styled.div`
  font-family: 'a11';
  font-size: 16px;
`;

const Button1 = styled.button`
  width: 150px;
  height: 50px;
  margin-top: 30px;
  border: none;
  border-radius: 7px;
  background: #e9ecef;

  font-family: 'a15';
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;
const Button2 = styled.button`
  width: 200px;
  height: 50px;
  margin-left: 30px;
  border: none;
  border-radius: 7px;
  background: #e9ecef;

  font-family: 'a15';
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;

const Back3 = styled.div`
  background-color: rgb(230, 243, 230);
  display: flex;
  align-items: center;
  padding-top: 100px;
`;

const Wrap3 = styled.div`
  background-color: rgb(230, 243, 230);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const Title3 = styled.div`
  font-family: 'a15';
  font-weight: 600;
  font-size: 48px;
`;

const Desc3 = styled.div`
  font-family: 'a11';
  font-size: 16px;
`;

const Li = styled.li`
  margin-right: 60px;
  font-size: 15px;
  width: 140px;
  list-style: none;
`;

const DescTitle = styled.p`
  font-family: 'a19';
  margin-top: 10px;
  font-size: 15px;
`;

const Desc = styled.p`
  font-family: 'a11';
  font-size: 14px;
`;

// const Back4 = styled.div`
//   background-color: rgb(248, 249, 250);
//   text-align: center;
//   padding: 100px;
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin: 0px;
// `;

// const Wrap4 = styled.div`
//   background-color: rgb(248, 249, 250);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 30px;
//   margin-top: 50px;
// `;

const Title4 = styled.div`
  font-family: 'a15';
  font-weight: 600;
  font-size: 40px;
`;

const Desc4 = styled.div`
  font-family: 'a11';
  font-size: 16px;
`;

const Button3 = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 30px;
  border: none;
  border-radius: 7px;
  background: #e9ecef;

  font-family: 'a15';
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
`;

// const Box = styled.div`
//   background-color: rgb(248, 249, 250);
//   height: 400px;
// `;

// const Image = styled.div`
//   width: 200px;
//   height: 200px;
//   position: relative;
//   overflow: hidden;
//   border-radius: 12px;
//   box-shadow: inset 0px 0px 0px 1px rgb(0 0 0 / 15%);
//   box-sizing: border-box;
// `;
