import React from 'react';

import ro from '../../assets/ro.png'

import { HeaderContainer, HeaderLogoDiv, HeaderPhoneDiv, HeaderLanguageChange, HeaderPhoneDivMedia, LitleScreenPhone, LitleScomeEveryPhone } from './header.styled';

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
    <LitleScreenPhone >
      <LitleScomeEveryPhone>
       +373(22)288 611
      </LitleScomeEveryPhone>
      <LitleScomeEveryPhone>
       +373(69)106 651
      </LitleScomeEveryPhone>
    </LitleScreenPhone>
    <HeaderLanguageChange>
      <img src={ro} alt='russian' title='rus' />
      </HeaderLanguageChange>
  </HeaderContainer>
)
export default Header;