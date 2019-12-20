import React from 'react';
import {EveryLongServiceContainer, ImageDiv, TextDiv} from './everyLongService.styled';


const EveryLongService = ({image, header, paragraph, serveceTextLong11}) =>(
  <EveryLongServiceContainer>
    <ImageDiv>
      <img src={image} alt="imageservice" />
    </ImageDiv>
    <TextDiv>
       <p>{header}</p>
       <p className="paragraph">{paragraph}</p>
       <p className="paragraph">{serveceTextLong11}</p>
    </TextDiv>
  </EveryLongServiceContainer>
)
export default EveryLongService;