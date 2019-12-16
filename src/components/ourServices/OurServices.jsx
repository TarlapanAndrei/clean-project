import React from 'react';
import ServiceAdidas400 from '../../assets/service-adidas400.jpg';
import ServiceTeu380 from '../../assets/service-teu380.jpg';
import ServiceBead380 from '../../assets/service-bead380.jpg';
import Covrolin380 from '../../assets/covrolin380.jpg';
import Ofice380 from '../../assets/ofice380.jpg';
import hardFloor380 from '../../assets/hardFloor380.jpg';
import { OurServicesContainer, HeaderDiv, HeaderText, HeaderUnderLine, ServicesContainer } from './OurServices.styled';

import ServiceElement from '../../components/service-element/serviceElement';

const OurServices = ({OurServicesPage}) =>{
  const { header, serviceText1, serviceText2, serviceText3, serviceText4, serviceText5, serviceText6} = OurServicesPage
  return(
  <OurServicesContainer>
    <HeaderDiv>
      <HeaderText>
     <h2>{header}</h2>
      </HeaderText>
      <HeaderUnderLine>
      </HeaderUnderLine>
    </HeaderDiv>
    <ServicesContainer>
      <ServiceElement image={ServiceAdidas400} text={serviceText1}/>
      <ServiceElement image={ServiceTeu380} text={serviceText2}/>
      <ServiceElement image={ServiceBead380} text={serviceText3}/>
      <ServiceElement image={Covrolin380} text={serviceText5}/>
      <ServiceElement image={Ofice380} text={serviceText6}/>
      <ServiceElement image={hardFloor380} text={serviceText4}/>
    </ServicesContainer>
  </OurServicesContainer>
)}
export default OurServices;