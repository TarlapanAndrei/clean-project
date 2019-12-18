import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FFFDF6;
`;
export const HeaderDiv = styled.div`
  width: 100%;
  height: 7em;
  display: flex;
  margin-top: 1em;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px){
    height: 6em;
  }
  @media (max-width: 885px){
    height: 5em;
  }
`;
export const HeaderText = styled.div`
  width: 43%;
  height: 80%;
  color: #545C55;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 3rem;
  }
  @media (max-width: 1020px){
    h2{
      font-size: 2.5rem;
    }
  }
  @media (max-width: 885px){
    h2{
      font-size: 2rem;
    }
  }
`;
export const HeaderUnderLine = styled.div`
  width:10em;
  height: 0.2em;
  dispaly: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #545C55;
  @media (max-width: 1020px){
    width:8em;
  }
  @media (max-width: 885px){
    width:7em;
  }
  @media screen and (max-width: 450px){
    display: none;
  }
`;
export const ServicesContainer = styled.div`
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 1em;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 1.6em;
    @media (max-width: 1450px){
      margin-left: 3em;
      margin-right: 3em;
    }
    @media (max-width: 1370px){
      margin-left: 2em;
      margin-right: 2em;
      gap: 1.5em;
    }
    @media (max-width: 1300px){
      gap: 1.4em;
    }
    @media (max-width: 1182px){
      gap: 1.3em;
    }
    @media (max-width: 1100px){
      gap: 1.2em;
    }
    @media (max-width: 1077px){
      gap: 1.2em;
    }
    @media (max-width: 1017px){
      gap: 1.1em;
    }
    @media (max-width: 950px){
      gap: 0.3em;
      grid-template-columns: 34% 34% 34%;
    }
    @media (max-width: 790px){
      grid-template-columns: 52% 52%;
    }
    @media (max-width: 790px){
      margin-left: 1em;
      margin-right: 1em;
    }
    @media (max-width: 500px){
      grid-template-columns: 100%;
    }
`;  