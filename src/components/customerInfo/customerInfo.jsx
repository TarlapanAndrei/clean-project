import React from 'react';
import {CustomerNumbers} from './customerIfo.styled';

const CustomerInfo = ({number, text}) =>(
   <CustomerNumbers>
     <p>{number}</p>
     <h4>{text}</h4>
  </CustomerNumbers> 
)
export default CustomerInfo;