import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  height: 28%;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  background-color: #FFFDF6;
  @media screen and (max-width: 1132px){
    height: 42%;
   }
   @media screen and (max-width: 697px){
    height: 66%;
   }
`;
export const HeaderDiv = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid yellow;
  
`;
export const HeaderText = styled.div`
  width: 43%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2{
    font-size: 45px;
  }
  @media screen and (max-width: 788px){
    h2{
      font-size: 38px;
    }
  }
`;
export const HeaderUnderLine = styled.div`
  width:80px;
  height: 2px;
  dispaly: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: black;
`;
export const ServicesContainer = styled.div`
  margin-left: 150px;
  margin-right: 110px;
  margin-top: 20px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
  @media screen and (max-width: 1300px){
    margin-left: 100px;
    margin-right: 70px;
  }
  @media screen and (max-width: 1300px){
    margin-left: 100px;
    margin-right: 70px;
  }
  @media screen and (max-width: 1200px){
    margin-left: 70px;
    margin-right: 50px;
  }
  @media screen and (max-width: 1150px){
    margin-left: 40px;
    margin-right: 30px;
  }
  @media screen and (max-width: 1101px){
    margin-left: 5px;
    margin-right: 5px;
  }
  @media screen and (max-width: 1032px){
    grid-template-columns: 50% 50%;
    margin-left: 150px;
    margin-right: 5px;
  }
  @media screen and (max-width: 1032px){
    margin-left: 80px;
  }
  @media screen and (max-width: 1032px){
    margin-left: 110px;
  }
  @media screen and (max-width: 856px){
    margin-left: 40px;
  }
  @media screen and (max-width: 812px){
    margin-left: 45px;
  }
  @media screen and (max-width: 775px){
    margin-left: 5px;
  }
  @media screen and (max-width: 768px){
    margin-left: 30px;
  }
  @media screen and (max-width: 697px){
    grid-template-columns: 50%;
    margin-left: 160px;
  }
  @media screen and (max-width: 697px){
    margin-left: 20px;
  }
`;