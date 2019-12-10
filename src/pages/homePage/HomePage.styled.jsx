import styled from 'styled-components';

export const HomepageContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2800px;
  position: relative;
  margin: 0px auto;
  @media screen and (orientation:landscape) and (max-width: 1366px){
    max-width: 1366px;
    height: 2710px;
    margin: 0 3px;
  }
  @media screen and (max-width: 1365px){
    max-width: 1300px;
    height: 2600px;
  }
  @media screen and (max-width: 1299px){
    max-width: 1200px;
    height: 2400px;
  }
  @media screen and (max-width: 1199px){
    max-width: 1100px;
    height: 2200px;
  }
  @media screen and (max-width: 1099px){
    max-width: 1025px;
    height: 2200px;
  }

  @media screen and (orientation:landscape) and (max-width: 1024px){
    max-width: 1024px;
    height: 2000px;
    margin: 0 5px; 
  }
  @media screen and (orientation : portrait) and (max-width: 1024px){
    max-width: 1024px;
    height: 2000px;
    margin: 0 5px;
  }
  @media screen and (max-width: 1023px){
    max-width: 950px;
    height: 1900px;
    margin: 0 5px;
  }
  @media screen and (max-width: 949px){
    max-width: 880px;
    height: 1600px;
    margin: 0 5px;

    @media screen and (orientation:landscape) and (max-width: 879px){
      max-width: 813px;
      height: 1630px;
      margin: 0 5px;
    }
  
  @media screen and (max-width: 812px){
    max-width: 812px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (max-width: 811px){
    max-width: 769px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (orientation : portrait) and (max-width: 768px){
    max-width: 768px;
    height: 1510px;
    margin: 0 5px;
  }
  @media screen and (max-width: 767px){
    max-width: 732px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (orientation : portrait) and (max-width: 731px){
    max-width: 731px;
    height: 1500px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 667px){
    max-width: 667px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (max-width: 666px){
    max-width:641px;
    height: 1230px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 640px){
    max-width: 640px;
    height: 1100px;
    margin: 0 5px;
  }
  @media screen and (max-width: 639px){
    max-width:569px;
    height: 1230px;
    margin: 0 5px;
  }
  @media screen and (max-width: 568px){
    max-width:568px;
    height: 1230px;
    margin: 0 5px;
    background-color: blue;
  }
  @media screen and (max-width: 414px){
    max-width:414px;
    height: 4280px;
    margin: 0 5px;
  }
  @media screen and (max-width: 400px){
    max-width:396px;
    height: 2880px;
    margin: 0 5px;
  }
  @media screen and (max-width: 375px){
    max-width:375px;
    height: 2880px;
    margin: 0 5px;
  }
  @media screen and (max-width: 360px){
    max-width:360px;
    height: 2990px;
    margin: 0 5px;
  }
`;