import React from 'react';

import ro from '../../assets/ro.png'

import { HeaderContainer, HeaderLogoDiv, HeaderPhoneDiv, HeaderLanguageChange, HeaderPhoneDivMedia } from './header.styled';

const Header = () =>(
  <HeaderContainer>
    <HeaderLogoDiv>
      Furmetexlogo
    </HeaderLogoDiv>
    <HeaderPhoneDiv>
      +373(22)288 611
    </HeaderPhoneDiv>
    <HeaderPhoneDivMedia>
      +373(69)106 651
    </HeaderPhoneDivMedia>
    <HeaderLanguageChange>
      <img src={ro} alt='russian' title='rus' />
      </HeaderLanguageChange>
  </HeaderContainer>
)
export default Header;