import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContactsContainer = styled.div`
  width: 70%;
  background-color: #F0EEE8;
  margin: auto;
`;

export const ContactsHeaderContainer = styled.div`
  width: 100%;
  display:flex;
  margin-bottom: 7em;
`;
export const ContactsHeader = styled.div`
  width: 75%;
  height: 100%;
  h3{
    color: #217A49;
    font-size: 2rem;
  }
`;
export const Home = styled(Link)`
  color: white;
  p{
    font-size: 2em;
    text-align:center;
  }
`;
export const DivForHome = styled.div`
  height: 7em;
  background-color: #1A5F39;
  width: 7em;
  border: 2px solid red;
`;
export const DivStart = styled.div`
  width: 90%;
  border: 2px solid white;
  margin: auto;
  p{
    font-size: 1.4rem;
  }
  img{
    margin-left: 1.2em;
    margin-top: .5em;
  }
`;
export const DivForPictures = styled.div`
  width: 90%;
  border: 2px solid white;
  margin: auto;
  p{
    font-size: 1.7rem;
    tex-align: center;
  }
  img{
    width: 100%;
  }
`;