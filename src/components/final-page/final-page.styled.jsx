import styled from 'styled-components';

export const FinalPageContainer = styled.div`
  width: 100%;
  background-color:#B2C9BD;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FinalPageContent = styled.div`
  width: 30%;
  margin-top: 1em;
  line-height: 0.3;
  .sity{
    font-size: 1.3rem;
  }
  @media (max-width: 1073px){
    width: 40%;
    margin-left: 20%;
  }
  @media (max-width: 770px){
    width: 60%;
    margin-left: 20%;
  }
  @media (max-width: 600px){
    width: 80%;
    margin-left: 10%;
  }
  @media (max-width: 350px){
    width: 90%;
    margin-left: 10%;
    line-height: 1;
  }
`;