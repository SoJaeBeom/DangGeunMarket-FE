import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Grid from '../styles/Grid';
import axios from 'axios';
import Bulletins from './Bulletins';
import carrot from '../image/carrot.png';
import Footer from './Footer';

export default function BulletinList() {
  const [BulletinNew, setBulletin] = useState();

  const getBulletinList = async () => {
    try {
      const data = await axios.get('http://54.180.2.97/api/post');
      setBulletin(data.data.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getBulletinList();
  }, []);

  let bulletinList = BulletinNew?.map((bulletin) => {
    return <Bulletins key={bulletin.id} product={bulletin} />;
  });
  return (
    <BulletinContainer>
      <BulletinTitlebox>
        <BulletinsTitle>
          <TitleImage />
          인기 당근생활
        </BulletinsTitle>
      </BulletinTitlebox>
      <BulletinBox>
        <Grid padding="25px" width="900px" margin="0 auto;">
          <Bulletins />
          <Bulletins />
          <Bulletins />
        </Grid>
      </BulletinBox>
      <Footer />
    </BulletinContainer>
  );
}

const BulletinContainer = styled.div`
  width: 100vw;
  background: #212124;
`;

const BulletinTitlebox = styled.div`
  width: 850px;
  height: 40px;
  margin: auto;
  margin-top: 60px;
`;

const BulletinsTitle = styled.span`
  width: 300px;
  display: flex;
  font-family: 'a15';
  font-weight: 600;
  font-size: 29px;
  color: white;
`;

const TitleImage = styled.div`
  width: 35px;
  height: 35px;
  background: url(${carrot});
  background-position: center;
  background-size: cover;
`;

const BulletinBox = styled.div`
  margin: auto;
  margin-bottom: 20px;
`;
