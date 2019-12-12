import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLanguage } from '../../redux/content/content.selectors';
import { changeLangToRu, changeLangToRo } from '../../redux/content/content.actions';
import ro from '../../assets/ro.png';
import ru from '../../assets/ru.png';

import { HeaderContainer, HeaderLogoDiv, HeaderPhoneDiv, HeaderLanguageChange, HeaderPhoneDivMedia, LitleScreenPhone, LitleScomeEveryPhone } from './header.styled';

const Header = ({selectLanguage, changeLangToRu, changeLangToRo}) =>(
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
     <a href="tel:+373 (22)288 611"><LitleScomeEveryPhone>
       +373(22)288 611
      </LitleScomeEveryPhone></a>
      <a href="tel:+373 (69)106 651"><LitleScomeEveryPhone>
       +373(69)106 651
      </LitleScomeEveryPhone></a>
    </LitleScreenPhone>
    <HeaderLanguageChange>
      { selectLanguage === 'romanian' ?
        (<div onClick={changeLangToRu}><img src={ru} alt='romanian' title='rus' /></div>) :
      (<div onClick={changeLangToRo}><img src={ro} alt='russian' title='rom' /></div>)}
      </HeaderLanguageChange>
  </HeaderContainer>
)
const mapStateToProps = createStructuredSelector({
  selectLanguage: selectLanguage
})
const mapDispatchToProps = dispatch =>({
  changeLangToRu: ()=> dispatch(changeLangToRu()),
  changeLangToRo: ()=> dispatch(changeLangToRo())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);