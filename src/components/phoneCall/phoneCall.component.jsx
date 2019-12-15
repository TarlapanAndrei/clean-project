import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {PhoneDropDownContainer, DivPhone} from './phoneCall.styled';
import Phone from '../../assets/phone.png';
import Viber from '../../assets/viber.png';

const PhoneCall = () =>(
  <PhoneDropDownContainer>
    <DivPhone>
    <a href="tel:+373 (22)288 611"><img src={Phone} alt="phone"/></a>
    </DivPhone>
    <DivPhone>
    <a href=" https://api.whatsapp.com/send?phone=+37368455999"><img src={Viber} alt="viber" /></a>
    </DivPhone>
  </PhoneDropDownContainer>
)
export default PhoneCall;