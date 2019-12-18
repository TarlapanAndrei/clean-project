import styled from 'styled-components';

export const WeWorkWithContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
export const EveryFrienDiv = styled.div`
margin: 0.5em;
max-width: 100%;
  img{
    height: 100%;
  }
  @media (max-width: 450px){
    max-width:400px;
    height: 130px;
    img{
      height: 90%;
    }
  }
  @media (max-width: 375px){
    margin: 0.3em;
    max-width:360px;
    img{
      height: 80%;
    }
  }
  @media (max-width: 320px){
    margin: 0.3em;
    max-width:360px;
    img{
      height: 70%;
    }
  }
`;
