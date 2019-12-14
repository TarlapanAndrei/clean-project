import React from 'react';
import homePageMain700 from '../../assets/homePageMain700.jpg';
import homePageMainWith400 from '../../assets/homePageMainWith400.jpg';
import homePageMainWith500 from '../../assets/homePageMainWith500.jpg';

import {GreenAndWindowContainer, GreenAndWindowSquare, GreenAndWindowImage, GreenWindowTextContainer, Hdiv, Pdiv, ButtonDiv, ButtonText} from './greenAndWindow.styled';


const GreenAndWindow = ({homePage}) =>{
  const {slogan, homeTextUnderSlogan, buttonCollUsText} = homePage;
  return(
  <GreenAndWindowContainer>
    <GreenAndWindowSquare>
      <GreenWindowTextContainer>
   <Hdiv><h1>{slogan} </h1></Hdiv>
   <Pdiv><p>{homeTextUnderSlogan}</p></Pdiv>
  <ButtonDiv><ButtonText>{buttonCollUsText}</ButtonText></ButtonDiv>
  </GreenWindowTextContainer>
    </GreenAndWindowSquare>
    <GreenAndWindowImage >
      <img src={ homePageMain700} alt='an image' />
    </GreenAndWindowImage>
  </GreenAndWindowContainer>
)}
export default GreenAndWindow;