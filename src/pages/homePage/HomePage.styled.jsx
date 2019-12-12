import styled from 'styled-components';

export const HomepageContainer = styled.div`
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4500px;
  position: relative;
  margin: 0px auto;
  @media screen and (max-width: 1400px){
    max-width: 1300;
    height:4400px;
  }
  @media screen and (max-width: 1300px){
    max-width: 1200;
    height:4400px;
  }
  @media screen and (max-width: 1032px){
    height:4400px;
  }
  @media screen and (max-width: 697px){
    height:5300px;
  }
`;