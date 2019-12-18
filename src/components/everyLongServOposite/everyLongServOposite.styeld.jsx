import styled from 'styled-components';

export const EveryLongServiceContainer = styled.div`
  width: 97%;
  padding-left: 3%;
  display: flex;
  margin-right:0;
  justify-content: end;
  border: 1px solid #F0EEE8;
  @media (max-width: 1040px){
    width: 100%;
    padding-left: 0;
  }
  @media (max-width: 450px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

`;
export const ImageDiv = styled.div`
  width: 34%;
  img {
    max-width: 100%;
  }
  @media (max-width: 450px) {
    width: 100%;
  }
`;
export const TextDiv = styled.div`
  width: 66%;
  text-align: right;
  padding-left: 0.5em;
  padding-right: 0.5em;
  p{
    font-size: 2.2rem;
    color: black;
  }
  .paragraph{
    font-size: 1.4rem;
  }
  @media (max-width:1200px){
    p{
      font-size: 2rem;
      color: black;
    }
    .paragraph{
      font-size: 1.2rem;
    }
  }
  @media (max-width:1000px){
    padding-left: 0em;
    p{
      font-size: 1.7rem;
      color: black;
    }
    .paragraph{
      font-size: 1.1rem;
    }
  }
  @media (max-width:880px){
    p{
      font-size: 1.3rem;
      color: black;
    }
    .paragraph{
      font-size: 1rem;
    }
  }
  @media (max-width:760px){
    p{
      font-size: 1rem;
      color: black;
    }
    .paragraph{
      font-size: .8rem;
    }
  }
  @media (max-width:613px){
    p{
      font-size: .9rem;
      color: black;
    }
    .paragraph{
      font-size: .7rem;
    }
  }
  @media (max-width: 450px) {
    width: 97%;
    p{
      font-size: 2rem;
      color: black;
    }
    .paragraph{
      font-size: 1.5rem;
    }
  }
`;