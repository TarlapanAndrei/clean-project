import React from 'react';
import { connect } from 'react-redux';
import { togglePhoneStatus } from '../../redux/phoneCall/phoneCall.actions';
import homePageMain700 from '../../assets/homePageMain700.jpg';
import homePageMainWith400 from '../../assets/homePageMainWith400.jpg';
import homePageMainWith500 from '../../assets/homePageMainWith500.jpg';

import {GreenAndWindowContainer, GreenAndWindowSquare, GreenAndWindowImage, GreenWindowTextContainer, Hdiv, Pdiv, ButtonDiv, ButtonText} from './greenAndWindow.styled';


const GreenAndWindow = ({homePage, togglePhone}) =>{
  const {slogan, homeTextUnderSlogan, buttonCollUsText} = homePage;
  return(
  <GreenAndWindowContainer>
    <GreenAndWindowSquare>
      <GreenWindowTextContainer>
   <Hdiv><h1>{slogan} </h1></Hdiv>
   <Pdiv><p>{homeTextUnderSlogan}</p></Pdiv>
  <ButtonDiv onClick={togglePhone}><ButtonText>{buttonCollUsText}</ButtonText></ButtonDiv>
  </GreenWindowTextContainer>
    </GreenAndWindowSquare>
    <GreenAndWindowImage >
      <img src={ homePageMain700} alt='animage' />
    </GreenAndWindowImage>
  </GreenAndWindowContainer>
)}
const mapDispatchToProps = dispatch =>({
  togglePhone: ()=> dispatch(togglePhoneStatus())
})
export default connect(null, mapDispatchToProps)(GreenAndWindow);