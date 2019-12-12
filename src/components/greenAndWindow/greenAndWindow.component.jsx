import React from 'react';

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

    </GreenAndWindowImage>
  </GreenAndWindowContainer>
)}
export default GreenAndWindow;