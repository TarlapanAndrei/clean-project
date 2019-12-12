import React from 'react';
import { EveryServiceContainer, ImageDiv, TextDiv } from './serviceElement.styled';

const ServiceElement = ({image, text}) =>(
  <EveryServiceContainer>
   <ImageDiv>
    <img src={image} alt="imageservice" />
   </ImageDiv>
   <TextDiv>
     <p>{text}</p>
   </TextDiv>
  </EveryServiceContainer>
)
export default ServiceElement;