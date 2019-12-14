import styled from 'styled-components';

export const EveryServiceContainer = styled.div`
  width: 330px;
  height: 500px;
  cursor: pointer;
  @media screen and (max-width: 320px){
    width: 300px;
   
  }
`;

export const ImageDiv = styled.div`
  width: 100%;
  max-height: 300px;
  img {
    max-height: 100%;
    max-width: 100%;
  }

`;
export const TextDiv = styled.div`
  width: 97%;
  padding-left: 10px;
  p{
    font-size: 25px;
  }
  @media screen and (max-width: 1233px){
    p{
      font-size: 22px;
    }
   }
`;