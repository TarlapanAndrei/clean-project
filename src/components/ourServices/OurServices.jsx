import React from 'react';
import ServiceAdidas400 from '../../assets/service-adidas400.jpg';
import ServiceTeu380 from '../../assets/service-teu380.jpg';
import ServiceBead380 from '../../assets/service-bead380.jpg';
import { OurServicesContainer, HeaderDiv, HeaderText, HeaderUnderLine, ServicesContainer } from './OurServices.styled';

import ServiceElement from '../../components/service-element/serviceElement';

const OurServices = ({OurServicesPage}) =>{
  const { header, serviceText1, serviceText2, serviceText3} = OurServicesPage
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
      <ServiceElement image={ServiceBead380} text={serviceText3}/>
      <ServiceElement image={ServiceAdidas400} text={serviceText1}/>
      <ServiceElement image={ServiceTeu380} text={serviceText2}/>
    </ServicesContainer>
  </OurServicesContainer>
)}
export default OurServices;