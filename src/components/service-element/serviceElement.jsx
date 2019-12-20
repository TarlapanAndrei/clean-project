import React from 'react';
import {Link} from 'react-router-dom';
import { EveryServiceContainer, ImageDiv, TextDiv } from './serviceElement.styled';

const ServiceElement = ({image, text, fullText, additionalText}) =>(
  <EveryServiceContainer>
    <Link to="/services">
   <ImageDiv>
    <img src={image} alt="imageservice" />
   </ImageDiv>
   <TextDiv>
<p>{text}</p>
<p><span>{fullText}</span></p>
<p>{additionalText}</p>
   </TextDiv>
   </Link>
  </EveryServiceContainer>
)
export default ServiceElement;