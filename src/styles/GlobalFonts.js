import { createGlobalStyle } from 'styled-components';
import HSFont from './HS두꺼비체.ttf';
import Bazzi from './Bazzi.ttf';
import Changwon from './ChangwonDangamAsac-Bold.ttf';
import a15 from './a고딕15.ttf';
import a19 from './a고딕19.ttf';
import a11 from './a고딕11.ttf';

export default createGlobalStyle`		      
  @font-face {
    font-family: 'HSFont';
    src: local('HSFont'),   
    url(${HSFont}) format('woff');
    font-weight: 300; 		
    font-style: normal;
  }

  @font-face {
    font-family: 'Bazzi';
    src: local('Bazzi'),
    url(${Bazzi}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Changwon';
    src: local('Changwon'),
    url(${Changwon}) format('woff');
  }

  @font-face {
    font-family: 'a15';
    src: local('a15'),
    url(${a15}) format('woff');
  }

  @font-face {
    font-family: 'a19';
    src: local('a19'),
    url(${a19}) format('woff');
  }

  @font-face {
    font-family: 'a11';
    src: local('a11'),
    url(${a11}) format('woff');
  }
`;
