import styled from 'styled-components';

export const PhoneDropDownContainer = styled.div`
  position:fixed;
  width: 90%;
  height: 100px;
  padding:20px;
  border: none;
  background-color:none;
  bottom: 0px;
  right: auto;
  z-index: 5;
  display: flex;
  padding: 5px;
  justify-content: space-between;
  display: none;
  @media (max-width:1024px){
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;
export const DivPhone = styled.div`

`;