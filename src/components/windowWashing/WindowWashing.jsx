import React from 'react';
import CustomerInfo from '../customerInfo/customerInfo';
import { WindowWashingPix, HeaderDiv, HeaderDivStart, HeaderDivBig, HeaderHr, CustomerNumbers} from './WindowWashing.styled';
const WindowWashing = ({WindowWash}) =>{
  const {windowText1, windowText2, customerCount, personelCount, tehnologi, customerPercent} = WindowWash;
  return(
  <WindowWashingPix>
     <HeaderDiv>
       <HeaderDivStart >
      <h2>{windowText1}</h2>
       </HeaderDivStart>
       <HeaderDivBig >
      <p>{windowText2}</p>
       </HeaderDivBig>
       <HeaderHr/>
     </HeaderDiv>
     <CustomerNumbers>
       <CustomerInfo number={1150} text={customerCount}/>
       <CustomerInfo number={26} text={personelCount}/>
       <CustomerInfo number={5} text={tehnologi}/>
       <CustomerInfo number={"100%"} text={customerPercent}/>
     </CustomerNumbers>
  </WindowWashingPix>
)}
export default WindowWashing;