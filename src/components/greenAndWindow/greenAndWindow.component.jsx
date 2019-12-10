import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectLanguage, selectAllContent} from '../../redux/content/content.selectors';

import {GreenAndWindowContainer, GreenAndWindowSquare, GreenAndWindowImage, GreenWindowTextContainer, Hdiv, Pdiv, ButtonDiv, ButtonText} from './greenAndWindow.styled';


const GreenAndWindow = ({selectLanguage, selectAllContent}) =>{
  const {homePage:{slogan, homeTextUnderSlogan, buttonCollUsText}} = selectAllContent[selectLanguage];
  console.log(selectAllContent[selectLanguage])
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
const mapStateToProps = createStructuredSelector({
  selectLanguage: selectLanguage,
  selectAllContent: selectAllContent
})
export default connect(mapStateToProps)(GreenAndWindow);