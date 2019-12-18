import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const EveryServiceContainer = styled.div`
  width: 90%;
  cursor: pointer;
  border: 2px solid #F0EEE8;
  @media (max-width: 500px){
    width: 100%;
`;

export const ImageDiv = styled.div`
  width: 100%;
  img {
    max-width: 100%;
  }

`;
export const TextDiv = styled.div`
  width: 97%;
  padding-left: 0.5em;
  padding-right: 0.5em;
  p{
    font-size: 1.8rem;
    color: black;
  }
  span{
    font-size: 1.2rem;
  }
`;