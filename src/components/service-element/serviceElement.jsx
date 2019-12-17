import React from 'react';
import { EveryServiceContainer, ImageDiv, TextDiv } from './serviceElement.styled';

const ServiceElement = ({image, text, fullText}) =>(
  <EveryServiceContainer>
   <ImageDiv>
    <img src={image} alt="imageservice" />
   </ImageDiv>
   <TextDiv>
<p>{text} <span>{fullText}</span></p>
   </TextDiv>
  </EveryServiceContainer>
)
export default ServiceElement;