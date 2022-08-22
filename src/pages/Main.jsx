import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import mainpage1 from '../image/mainimage1.png';

export default function Main() {
  return (
    <MainContainer>
      <Header />
      <Desc1></Desc1>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Desc1 = styled.div`
  width: 100%;
  height: 43.75rem;
  background-color: #fbf7f2;
  background: url(${mainpage1});
`;
