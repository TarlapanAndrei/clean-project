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
  const { header, serviceText1, additionalText, serviceText1Comlete, serviceText2, serviceText2Comlete, serviceText3, serviceText3Comlete, serviceText4, serviceText4Comlete, serviceText5, serviceText5Comlete, serviceText6, serviceText6Comlete} = OurServicesPage
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
      <ServiceElement image={ServiceAdidas400} text={serviceText1} fullText={serviceText1Comlete} additionalText={additionalText}/>
      <ServiceElement image={ServiceTeu380} text={serviceText2} fullText={serviceText2Comlete}/>
      <ServiceElement image={ServiceBead380} text={serviceText3} fullText={serviceText3Comlete}/>
       <ServiceElement image={hardFloor380} text={serviceText4} fullText={serviceText4Comlete}/>
      <ServiceElement image={Covrolin380} text={serviceText5} fullText={serviceText5Comlete}/>
      <ServiceElement image={Ofice380} text={serviceText6} fullText={serviceText6Comlete}/>
    </ServicesContainer>
  </OurServicesContainer>
)}
export default OurServices;