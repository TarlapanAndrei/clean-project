import React from 'react';
import {EveryLongServiceContainer, ImageDiv, TextDiv} from './everyLongService.styled';


const EveryLongService = ({image, header, paragraph}) =>(
  <EveryLongServiceContainer>
    <ImageDiv>
      <img src={image} />
    </ImageDiv>
    <TextDiv>
       <p>{header}</p>
       <p className="paragraph">{paragraph}</p>
    </TextDiv>
  </EveryLongServiceContainer>
)
export default EveryLongService;