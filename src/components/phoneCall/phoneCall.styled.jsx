import styled from 'styled-components';

export const PhoneDropDownContainer = styled.div`
  position:fixed;
  width: 280px;
  height: 100px;
  padding:20px;
  border: none;
  background-color:none;
  bottom: 300px;
  right: auto;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  display: none;
  @media (max-width:1024px){
    display: flex;
  }
`;
export const DivPhone = styled.div`

`;