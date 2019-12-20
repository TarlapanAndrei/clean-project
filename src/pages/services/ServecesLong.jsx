import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectAllContent, selectLanguage} from '../../redux/content/content.selectors';

import { ServiceLongContainer, HeaderContainer, Home, DivForHome, ServicesHeader, ServiceBlocContainer} from './ServicesLong.styled';
import Carpet from '../../assets/Carpet.jpg';
import Mobila from '../../assets/Mobila.jpg';
import Mocheta from '../../assets/Mocheta.jpg';
import Window from '../../assets/Window400.jpg';
import Floor from '../../assets/floor.jpg';
import Ofice from '../../assets/ofice.jpg';
import EveryLongService from '../../components/everiLongService/everyLongService';
import EveryLongServiceOposite from '../../components/everyLongServOposite/everyLongServOposite';

const ServicesLong = ({selectAllContent, selectLanguage}) => {
  const  {OurServicesPage:{header, serviceText1, serveceTextLong1, serveceTextLong11, serviceText2, serveceTextLong2, serviceText3, serveceTextLong3, serviceText4, serveceTextLong4, serviceText5, serveceTextLong5, serviceText6, serveceTextLong6}}  = selectAllContent[selectLanguage]
  return(
  <ServiceLongContainer>
    <HeaderContainer>
    <DivForHome>
    <Home to='/'>
       <p>Home</p>
     </Home>
     </DivForHome>
     <ServicesHeader>
      <h2>{header}</h2>
     </ServicesHeader>
    </HeaderContainer>
    <ServiceBlocContainer>
    <EveryLongService image={Carpet} header={serviceText1} paragraph={serveceTextLong1} serveceTextLong11={serveceTextLong11}/>
    <EveryLongServiceOposite image={Window} header={serviceText2} paragraph={serveceTextLong2}/>
    <EveryLongService image={Mobila} header={serviceText3} paragraph={serveceTextLong3}/>
    <EveryLongServiceOposite image={Floor} header={serviceText4} paragraph={serveceTextLong4}/>
    <EveryLongService image={Mocheta} header={serviceText5} paragraph={serveceTextLong5}/>
    <EveryLongServiceOposite image={Ofice} header={serviceText6} paragraph={serveceTextLong6}/>
    </ServiceBlocContainer>
  </ServiceLongContainer>
)}
const mapStateToProps = createStructuredSelector({
  selectAllContent: selectAllContent,
  selectLanguage: selectLanguage
})
export default connect(mapStateToProps)(ServicesLong);