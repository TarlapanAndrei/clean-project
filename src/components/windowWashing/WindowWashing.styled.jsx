import styled from 'styled-components';
import WindowWash from '../../assets/WindowWosh.png';
import WindowWash600 from '../../assets/WindowWash600.jpg';
import WindowWashMini from '../../assets/WindowWashMini.png';

export const WindowWashingPix = styled.div`
  background-image: url(${WindowWash});
  background-size: cover;
  width: 100%;
  height: 14%;
  @media screen and (max-width: 1024px){
    height: 11%;
  }
  @media screen and (max-width: 900px){
    height: 10%;
  }
  @media screen and (max-width: 824px){
    height: 10%;
    background-image: url(${WindowWash});
  }
  @media screen and (max-width: 790px){
    height: 8%;
  }
  @media screen and (max-width: 667px){
    background-image: url(${WindowWash600});
    height: 5%;
  @media screen and (max-width: 641px){
    background-image: url(${WindowWash600});
    height: 6%;
  }
  @media screen and (max-width: 568px){
    height: 5.5%;
  }
  @media screen and (max-width: 450px){
    background-image: url(${WindowWashMini});
    background-size: cover;
    width: 100%;
    height: 6%;
  }
  
`;
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 33%;
  background-color: rgba(0, 0, 0, 0.3);


`;
export const HeaderDivStart = styled.div`
  color: white;
  display:flex;
  height: 20px;
  @media screen and (max-width: 667px){
    display: none;
  }
`;
export const HeaderDivBig = styled.div`
  color: white;
  font-size: 39px;
  @media screen and (max-width: 812px){
    font-size: 28px;
  }
  @media screen and (max-width: 667px){
    font-size: 22px;
  }
  @media screen and (max-width: 641px){
    font-size: 25px;
  }
  @media screen and (max-width: 500px){
    
  }

`;
export const HeaderHr = styled.div`
  border: 2px solid green;
  width: 110px;
  height: 2px;
  background-color: white;
  margin-bottom: 10px;
  @media screen and (max-width: 1024px){
      display: none;
  }

`;
export const CustomerNumbers = styled.div`
  max-width: 90%;
  height: auto;
  display:grid;
  grid-template-columns: 22% 20% 20% 20%;
  column-gap: 20px;
  row-gap: 20px;
  margin-top: 6%;
  margin-left: 10%;
  text-shadow: 
		-0   -1px 6px #706C6C,
		 0   -1px 6px #706C6C,
		-0    1px 6px #706C6C,
		 0    1px 6px #706C6C,
		-1px -0   6px #706C6C,
		 1px -0   6px #706C6C,
		-1px  0   6px #706C6C,
		 1px  0   6px #706C6C,
		-1px -1px 6px #706C6C,
		 1px -1px 6px #706C6C,
		-1px  1px 6px #706C6C,
		 1px  1px 6px #706C6C,
		-1px -1px 6px #706C6C,
		 1px -1px 6px #706C6C,
		-1px  1px 6px #706C6C,
		 1px  1px 6px #706C6C;
  @media screen and (max-width: 641px){
    height: 30%;
  }
  @media screen and (max-width: 500px){
    width: 60%;
    dispaly: grid;
    grid-template-columns: 60% 60%;
    column-gap: 40px;
  }
`;

