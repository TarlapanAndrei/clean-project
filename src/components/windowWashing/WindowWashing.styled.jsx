import styled from 'styled-components';
import WindowWash from '../../assets/WindowWosh.png';

export const WindowWashingPix = styled.div`
  background-image: url(${WindowWash});
  background-size: cover;
  width: 100%;
  height: 14%;
  border: 1px solid black;
  @media screen and (max-width: 790px){
    height: 10%;
  }
  @media screen and (max-width: 790px){
    height: 8%;
  }
  
`;
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 43%;
`;
export const HeaderDivStart = styled.div`
  color: white;
  display:flex;
  height: 20px;
`;
export const HeaderDivBig = styled.div`
  color: white;
  font-size: 39px;
  @media screen and (max-width: 790px){
    font-size: 30px;
  }
  @media screen and (max-width: 615px){
    font-size: 25px;
  }

`;
export const HeaderHr = styled.div`
  width: 110px;
  height: 2px;
  background-color: white;
  margin-bottom: 50px;
`;
export const CustomerNumbers = styled.div`
  background-color: rgba(0, 0, 0, 0.3);;
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  
`;
