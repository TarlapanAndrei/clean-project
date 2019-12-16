import styled from 'styled-components';

export const CustomerCommentsContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFDF6;
  

`;
export const CommentBlock = styled.div`
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: 23% 23% 23% 23%;
  column-gap: 2.64%;
  @media (max-width: 800px){
    grid-template-columns: 46% 46%;
    column-gap: 8%;
  }
  @media (max-width: 500px){
    grid-template-columns: 90%;
    margin-left: 8%;
  }
`;