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
  @media screen and (max-width: 414px){
    max-height: 500px;
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
  @media screen and (max-width: 414px){
    height: 500px;
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
    @media screen and (max-width: 812px){
      h1{
        font-size: 25px;
      }
    }
    @media screen and (max-width: 666px){
      h1{
        font-size: 21px;
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 639px){
      h1{
        font-size: 19px;
        margin-left: 10px;
      }
    }
    @media screen and (max-width: 414px){
      h1{
        font-size: 25px;
        margin-left: 10px;
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
  @media screen and (orientation : portrait) and (max-width: 1024px){
    font-size: 22px;
  }
  @media screen and (max-width: 812px){
    font-size: 20px;
  }
  @media screen and (max-width: 666px){
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media screen and (max-width: 639px){
    font-size: 16px;
  }
  @media screen and (max-width: 414px){
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
  border: 2px solid white;
  border-radius: 6px;
  @media screen and (max-width: 1365px){
    margin-left: 25px;
    margin-top: 17px;
  }
  @media screen and (max-width: 1099px){
    width: 36%;
    height: 9%;
  }
  @media screen and (orientation : portrait) and (max-width: 1024px){
    width: 42%;
    height: 11%;
  }
  @media screen and (max-width: 949px){
    width: 46%;
    height: 11%;
  }
  @media screen and (max-width: 879px){
    width: 49%;
  }
  @media screen and (max-width: 812px){
    width: 54%;
  }
  @media screen and (max-width: 735px){
    width: 59%;
  }
  @media screen and (max-width: 666px){
    width: 65%;
  }
  @media screen and (max-width: 639px){
    width: 69%;
  }
  @media screen and (max-width: 579px){
    width: 77%;
  }
  @media screen and (max-width: 414px){
    width: 87%;
  }
`;
export const ButtonText = styled.div`
  margin: 11px 20px;
  font-size: 23px;
  @media screen and (max-width: 1365px){
    margin: 7px 18px;
    font-size: 20px;
  }
  @media screen and (max-width: 1199px){
    font-size: 17px;
  }
  @media screen and (orientation : portrait) and (max-width: 1024px){
    font-size: 20px;
  }
  @media screen and (max-width: 414px){
    margin: 10px 75px;
    font-size: 25px;
  }
  @media screen and (max-width: 375px){
    margin: 6px 55px;
  }
  @media screen and (max-width: 360px){
    margin: 6px 55px;
  }
`;