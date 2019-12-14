import styled from 'styled-components';
import homePageMain from '../../assets/homePageMain.jpg';
import homePageMain700 from '../../assets/homePageMain700.jpg';
import homePageMainWith400 from '../../assets/homePageMainWith400.jpg';
import homePageMainWith500 from '../../assets/homePageMainWith500.jpg';



export const GreenAndWindowContainer = styled.div`
   display: grid;
   grid-template-columns: 50% 50%;
   min-height: 16%;
   @media screen and (max-width: 1350px){
    min-height: 15%;
   }
   @media screen and (max-width: 1271px){
    min-height: 14%;
   }
   @media screen and (max-width: 1201px){
    min-height: 13%;
   }
   @media screen and (max-width: 1132px){
    min-height: 11%;
   }
   @media screen and (max-width: 940px){
    min-height: 10%;
   }
   @media screen and (max-width: 865px){
    min-height: 8%;
   }
   @media screen and (max-width: 845px){
    min-height: 7%;
   }
   @media screen and (max-width: 568px){
    min-height: 5%;
   }
   @media screen and (max-width: 450px){
    grid-template-columns: 100%;
    min-height: 9%;
   }
   

`;
export const GreenAndWindowSquare = styled.div`
  display: flex;
  background-color: rgba(26, 95, 57, 1.0);
  max-heigth: 100%;
  @media screen and (max-width: 550px){
    width: 100%;
  }
  @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2){
    height: 550px;
  }
  @media screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio:2){
    width:100%;
  }
`;
export const GreenAndWindowImage = styled.div`
  heigth: 100%;
  background-image: url(${homePageMain});
  background-size: cover;
  background-repeat: no-repeat; 
  }
  @media screen and (max-width: 1400px){
    background-image: url(${homePageMain700});
  }
  @media screen and (max-width: 1000px)and (-webkit-min-device-pixel-ratio:2){
    background-image: url(${homePageMainWith500});
  }
  @media screen and (max-width: 800px){
    background-image: url(${homePageMainWith400});
  }
  @media screen and (max-width: 568px)and (-webkit-min-device-pixel-ratio:2){
    background-image: url(${homePageMainWith400});
  }
  @media screen and (max-width: 414px)and (-webkit-min-device-pixel-ratio:2){
    height: 414px;
    background-image: url(${homePageMainWith500});
  }
  @media screen and (max-width: 375px) and (-webkit-min-device-pixel-ratio:2){
    height: 375px;
    background-image: url(${homePageMainWith400});
  }
  @media screen and (max-width: 360px) {
    height: 360px;
  }
  @media screen and (max-width: 320px){
    height: 310px;
    width: 300px;
  }
`;
export const GreenWindowTextContainer = styled.div`
  margin-top: 80px;
  color: white;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1365px){
    margin-top: 70px;
  }
  @media screen and (max-width: 1099px){
    margin-top: 60px;
  }
`;
export const Hdiv = styled.div`
    margin-left: 30px;
    h1{
      font-size: 62px;
    }
    @media screen and (max-width: 1365px){
      margin-left: 25px;
      h1{
        font-size: 55px;
      }
    }
    @media screen and (max-width: 1099px){
      margin-left: 20px;
      h1{
        font-size: 45px;
      }
    }
    @media screen and (max-width: 949px){
      h1{
        font-size: 36px;
      }
    }
    @media screen and (max-width: 879px){
      h1{
        font-size: 32px;
      }
    }
    @media screen and (max-width: 845px){
      h1{
        font-size: 28px;
      }
    }
    @media screen and (max-width: 812px){
      h1{
        font-size: 25px;
      }
    }
    @media screen and (max-width: 667px){
      margin-left: 18px;
      h1{
        font-size: 20px;
      }
    }
    @media screen and (max-width: 640px) and (-webkit-min-device-pixel-ratio:2) {
      h1{
        font-size: 19px;
      }
    }
    @media screen and (max-width: 414px){
      h1{
        font-size: 25px;
    }
  }
   @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2){
     h1{
     font-size: 35px;
    }
  }
    @media screen and (max-width: 375px) and (-webkit-min-device-pixel-ratio:2){
      h1{
     
      font-size: 35px;
    }
  }
  @media screen and (max-width: 375px) {
    h1{
    font-size: 30px;
    }
  }
  @media screen and (max-width: 320px){
    h1{
      font-size: 22px;
      }
  }
`;
export const Pdiv = styled.div`
  margin-left: 30px;
  margin-right: 25px;
  font-size: 25px;
  @media screen and (max-width: 1365px){
    margin-left: 25px;
    margin-right: 20px;
    font-size: 20px;
  }
  @media screen and (orientation : portrait) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio:2){
    font-size: 22px;
  }
  @media screen and (max-width: 812px) and (-webkit-min-device-pixel-ratio:2) {
    font-size: 20px;
  }
  @media screen and (max-width: 667px){
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 639px) and (-webkit-min-device-pixel-ratio:2){
    font-size: 16px;
  }
  @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2){
    margin-left: 30px;
    margin-right: 25px;
    font-size: 22px;
  }
`;
export const ButtonDiv = styled.div`
  width: 32%;
  height: 8%;
  margin-left: 30px;
  margin-top: 20px;
  margin-bottom:10px;
  border: 2px solid white;
  border-radius: 6px;
  @media screen and (max-width: 1365px){
    margin-left: 25px;
    margin-top: 17px;
  }
  @media screen and (max-width: 1312px){
    width: 36%;
    height: 9%;

  @media screen and (max-width: 1099px){
    width: 36%;
    height: 9%;
  }
  @media screen and (orientation : portrait) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio:2){
    width: 42%;
    height: 11%;
  }
  @media screen and (max-width: 949px){
    width: 46%;
    height: 11%;
  }
  @media screen and (max-width: 879px){
    width: 49%;
    margin-bottom:10px;
  }
  @media screen and (max-width: 823px) and (-webkit-min-device-pixel-ratio:2){
    width: 54%;
    margin: auto;
  }
  @media screen and (max-width: 812px) and (-webkit-min-device-pixel-ratio:2){
    width: 54%;
  }
  @media screen and (max-width: 735px){
    width: 59%;
    margin: auto;
  }
  @media screen and (max-width: 735px) and (-webkit-min-device-pixel-ratio:2){
    margin: auto;
  }
  @media screen and (max-width: 666px){
    width: 65%;
  }
  @media screen and (max-width: 640px) and (-webkit-min-device-pixel-ratio:2) {
    width: 69%;
    margin: auto
  }
  @media screen and (max-width: 579px){
    width: 77%;
  }
  @media screen and (max-width: 568px)and (-webkit-min-device-pixel-ratio:2){
    margin-top:0px;
  }
  @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2) {
    width: 87%;
  }
  @media screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio:2) {
    width: 87%;
    margin: auto;
  }
`;
export const ButtonText = styled.div`
  margin: 11px 20px;
  font-size: 23px;
  @media screen and (max-width: 1365px) and (-webkit-min-device-pixel-ratio:2) {
    margin: 7px 18px;
    font-size: 20px;
  }
  @media screen and (max-width: 1360px) {
    font-size: 22px;
  }
  @media screen and (max-width: 1199px){
    font-size: 17px;
  }
  @media screen and (orientation : portrait) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio:2) {
    font-size: 20px;
  }
  @media screen and (max-width: 568px)and (-webkit-min-device-pixel-ratio:2){
    padding:auto;
    margin: auto;
  }
  @media screen and (max-width: 414px) and (-webkit-min-device-pixel-ratio:2) {
    margin: 10px 75px;
    font-size: 25px;
  }
  @media screen and (max-width: 375px) and (-webkit-min-device-pixel-ratio:2) {
    margin: 6px 55px;
  }
  @media screen and (max-width: 360px) and (-webkit-min-device-pixel-ratio:2) {
    margin: 6px 55px;
  }
  @media screen and (max-width: 320px) and (-webkit-min-device-pixel-ratio:2) {
    margin: 6px 35px;
  }
`;