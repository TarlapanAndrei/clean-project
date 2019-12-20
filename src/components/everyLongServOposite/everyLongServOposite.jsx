import React from 'react';
import {EveryLongServiceContainer, ImageDiv, TextDiv} from './everyLongServOposite.styeld';


const EveryLongServiceOposite = ({image, header, paragraph}) =>(
  <EveryLongServiceContainer>
    <TextDiv>
       <p>{header}</p>
       <p className="paragraph">{paragraph}</p>
    </TextDiv>
    <ImageDiv>
      <img src={image} alt="imageservice" />
    </ImageDiv>
  </EveryLongServiceContainer>
)
export default EveryLongServiceOposite;