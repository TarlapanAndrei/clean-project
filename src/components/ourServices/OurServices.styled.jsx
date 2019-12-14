import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  height: 27%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #FFFDF6;
  @media screen and (max-width: 1132px){
    height: 27%;
   }
   @media screen and (max-width: 1032px){
    height: 38%;
   }
   @media screen and (max-width: 697px){
    height: 60%;
   }
   @media screen and (max-width: 320px){
    height: 59%;
   }
`;
export const HeaderDiv = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
  @media screen and (max-width: 900px){
    h2{
      font-size: 34px;
    }
  }
  @media screen and (max-width: 788px){
    h2{
      font-size: 30px;
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
  @media screen and (max-width: 411px){
    display: none;
  }
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
  @media screen and (max-width: 896px){
    margin-left: 80px;
  }
  @media screen and (max-width: 856px){
    margin-left: 40px;
  }
  @media screen and (max-width: 823px){
    margin-left: 65px;
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
  @media screen and (max-width: 768px){
    margin-left: 25px;
  }
  @media screen and (max-width: 731px){
    margin-left: 20px;
  }
  @media screen and (max-width: 697px){
    grid-template-columns: 50%;
    margin-left: 160px;
  }
  @media screen and (max-width: 697px){
    margin-left: 165px;
  }
  @media screen and (max-width: 568px){
    margin-left: 120px;
  }
  @media screen and (max-width: 414px){
    margin-left: 40px;
  }
  @media screen and (max-width: 411px){
    margin-left: 35px;
  }
  @media screen and (max-width: 375px){
    margin-left: 20px;
  }
  @media screen and (max-width: 360px){
    margin-left: 13px;
  }
  @media screen and (max-width: 320px){
    margin-left: 0px;
  }
`;