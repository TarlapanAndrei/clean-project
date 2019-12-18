import styled from 'styled-components';

export const WeWorkWithContainerGeneral = styled.div`
   display: flex;
   flex-direction: column;
   justify-content:center;
   align-items: center;
`;

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
export const WeWorckWithHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  h3{
    font-size: 3rem;
  }
  @media (max-width: 500px){
    h3{
      font-size: 2rem;
    }
  }
`;
