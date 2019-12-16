import React from 'react';
import SingleMessage from '../singleMessage/SingleMessage.component';
import { CustomerCommentsContainer, CommentBlock } from './CustomerComments.styled';
const CustomerComments = ({Comments:{ComTitle1, ComMessage1, ComName1, ComTitle2, ComMessage2, ComName2, ComTitle3, ComMessage3, ComName3, ComTitle4, ComMessage4, ComName4}}) =>{
  return(
  <CustomerCommentsContainer>
    <CommentBlock>
    <SingleMessage title={ComTitle1} message={ComMessage1} name={ComName1}/>
    <SingleMessage title={ComTitle2} message={ComMessage2} name={ComName2}/>
    <SingleMessage title={ComTitle3} message={ComMessage3} name={ComName3}/>
    <SingleMessage title={ComTitle4} message={ComMessage4} name={ComName4}/>
    </CommentBlock>
  </CustomerCommentsContainer>
)}
export default CustomerComments;