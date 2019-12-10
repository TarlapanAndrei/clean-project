import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderContainer = styled.div`
  background-color: rgba(26, 95, 57, 0.5);
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: bold;
  color: white;
  position: absolute;

  @media screen and (max-width: 800px){
    font-size: 20px;
    border-bottom:1px solid #31945C;
  }
  @media screen and (max-width: 600px){
    font-size: 13px;
    height: 50px;
  }
`;
export const HeaderLogoDiv = styled.div`
  width: 30%;
  height: 100%;
  display:flex;
  justify-content: start;
  align-items: center;
  padding: 0 40px;
  @media screen and (max-width: 600px){
    width: 40%;
    font-size: 14px;
    padding: 5 5px;
    margin-top: 3px;
  }
`;
export const HeaderPhoneDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right:20px;
  width: 35%;
  @media screen and (max-width: 850px){
    width: 45%;
    padding-right:0;

  }
`;
export const HeaderPhoneDivMedia = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
  @media screen and (max-width: 900px){
    display: none;
  }
`;
export const HeaderLanguageChange = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  padding: 0 10px;
  @media screen and (max-width: 600px){
    padding: 0 5px;
  }
`;