import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServiceLongContainer = styled.div`
  width: 98%;
  max-width: 1400px;
  background-color: #F0EEE8;
  margin: auto;
  position: relatieve;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`;
export const Home = styled(Link)`
  color: white;
  p{
    font-size: 2em;
    text-align:center;
  }
  @media (max-width:880px){
    p{font-size: 1.7em;}
  }
  @media (max-width: 640px){
    p{font-size: 1.4em;}
  }
`;
export const DivForHome = styled.div`
  height: 7em;
  background-color: #1A5F39;
  width: 7em;
  border: 2px solid red;
  position: fixed;
  top:0.2rem;
  @media (max-width: 880px){
    height: 6em;
    width: 6em;
  }
  @media (max-width: 640px){
    height: 5em;
    width: 5em;
  }
  @media (max-width: 450px){
    height: 5em;
  }
`;
export const ServicesHeader = styled.div`
  margin-left: 35%;
  width: 45%;
  height: 100%;
  h2{
    color: #217A49;
    font-size: 2.6rem;
  }
  @media (max-width: 880px){
    h2{
      font-size: 2.1rem;
    }
  }
  @media (max-width: 640px){
    h2{
      font-size: 1.8rem;
    }
  }
`;
export const ServiceBlocContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3em 5%;
  @media (max-width: 1300px){
    width: 96%;
    margin: 2em 2%;
  }
  @media (max-width: 450px){
    max-width: 100%;
    margin: auto;
  }
`;