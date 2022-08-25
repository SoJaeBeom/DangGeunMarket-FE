import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import bulletinimage from '../image/bulletinimage.png';
import BulletinList from '../components/BulletinList';

export default function Bulletin() {
  return (
    <BulletinContainer>
      <Header />
      <Imgbox>
        <Image>
          <ImageText>우리 동네에서 보는 당근생활</ImageText>
        </Image>
      </Imgbox>
      <BulletinList />
    </BulletinContainer>
  );
}

const BulletinContainer = styled.div`
  width: 100vw;
  background: #212124;
`;

const Imgbox = styled.div`
  width: 100%;
  height: 516px;
  position: relative;
  background: #ed7735;
`;

const Image = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;

  background: url(${bulletinimage});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ImageText = styled.div`
  width: 500px;
  height: 180px;

  margin: auto;
  margin-right: 500px;

  font-family: 'Changwon';
  font-size: 60px;
  color: white;
`;
