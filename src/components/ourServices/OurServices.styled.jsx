import styled from 'styled-components';

export const OurServicesContainer = styled.div`
  height: 33%;
  width: 1400px;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  background-color: #FFFDF6;

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
  

`;