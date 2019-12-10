import styled from 'styled-components';
import homePageMain from '../../assets/homePageMain.jpg';



export const GreenAndWindowContainer = styled.div`
   display: flex;
   width: 100%;
   min-height: 25%;
   @media screen and (max-width: 450px){
    max-height: 600px;
    display: grid;
  }
`;
export const GreenAndWindowSquare = styled.div`
  display: flex;
  width: 50%;
  background-color: rgba(26, 95, 57, 1.0);
  max-heigth: 100%;
  @media screen and (max-width: 550px){
    width: 100%;
    heigth: 80%;
  }
`;
export const GreenAndWindowImage = styled.div`
  display: flex;
  width: 50%;
  heigth: 100%;
  background-image: url(${homePageMain});
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 450px){
    width: 100%;
    background-size: cover;
  }
`;
export const GreenWindowTextContainer = styled.div`
  margin-top: 80px;
  color: white;
  display: flex;
  flex-direction: column;
`;
export const Hdiv = styled.div`
    margin-left: 30px;
    h1{
      font-size: 62px;
    }
`;
export const Pdiv = styled.div`
  margin-left: 30px;
  margin-right: 25px;
  font-size: 25px;
`;
export const ButtonDiv = styled.div`
  width: 32%;
  height: 8%;
  margin-left: 30px;
  margin-top: 20px;
  border: 2px solid white;
  border-radius: 6px;
`;
export const ButtonText = styled.div`
  margin: 11px 20px;
  font-size: 23px;
`;