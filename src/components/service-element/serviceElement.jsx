import React from 'react';
import {Link} from 'react-router-dom';
import { EveryServiceContainer, ImageDiv, TextDiv } from './serviceElement.styled';

const ServiceElement = ({image, text, fullText}) =>(
  <EveryServiceContainer>
    <Link to="/services">
   <ImageDiv>
    <img src={image} alt="imageservice" />
   </ImageDiv>
   <TextDiv>
<p>{text} <span>{fullText}</span></p>
   </TextDiv>
   </Link>
  </EveryServiceContainer>
)
export default ServiceElement;