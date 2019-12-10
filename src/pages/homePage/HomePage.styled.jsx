import styled from 'styled-components';

export const HomepageContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 2800px;
  position: relative;
  margin: 0px auto;
  @media screen and (max-width: 1400px){
    max-width: 1100px;
    height: 2200px;
  }
  @media screen and (orientation:landscape) and (max-width: 1366px){
    max-width: 1362px;
    height: 2610px;
    margin: 0 5px;
  }
  @media screen and (max-width: 1360px){
    max-width: 1100px;
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
    max-width: 880px;
    height: 1800px;
    margin: 0 5px;
  }
  @media screen and (max-width: 880px){
    max-width: 824px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 823px){
    max-width: 823px;
    height: 1630px;
    margin: 0 5px;
  }
  @media screen and (max-width: 822px){
    max-width: 768px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (orientation : portrait) and (max-width: 768px){
    max-width: 764px;
    height: 1510px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 750px){
    max-width: 725px;
    height: 1500px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 675px){
    max-width: 660px;
    height: 1300px;
    margin: 0 5px;
  }
  @media screen and (max-width: 650px){
    max-width:500px;
    height: 1230px;
    margin: 0 5px;
  }
  @media screen and (orientation:landscape) and (max-width: 640px){
    max-width: 636px;
    height: 1100px;
    margin: 0 5px;
  }
  @media screen and (max-width: 500px){
    max-width:496px;
    height: 3280px;
    margin: 0 5px;
  }
  @media screen and (max-width: 400px){
    max-width:396px;
    height: 2880px;
    margin: 0 5px;
  }
  @media screen and (max-width: 380px){
    max-width:374px;
    height: 2990px;
    margin: 0 5px;
  }
`;