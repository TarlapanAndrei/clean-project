import React from 'react';
import { StarDiv, SingleMessageContainer, TitleDiv, CommentDiv } from './singleMessage.styled';

const SingleMessage = ({title, message, name}) =>{
 
 console.log()
  return(
  <SingleMessageContainer>
  <StarDiv>
    <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </StarDiv>
  <TitleDiv>
  <h4>{title}</h4>
  </TitleDiv>
  <CommentDiv>
    <p>{message}</p>
  </CommentDiv>
  <TitleDiv>
  <h4>{name}</h4>
  </TitleDiv>
  </SingleMessageContainer>
)}
export default SingleMessage;