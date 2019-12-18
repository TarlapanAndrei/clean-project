import React from 'react';
import {PhoneDropDownContainer, DivPhone} from './phoneCall.styled';
import Phone from '../../assets/phone.png';
import Viber from '../../assets/viber.png';
import Facebook from '../../assets/facebook3.png';

const PhoneCall = () =>(
  <PhoneDropDownContainer>
    <DivPhone>
    <a href="tel:+373 (22)288 611"><img src={Phone} alt="phone"/></a>
    </DivPhone>
    <DivPhone>
      <a href="https://www.facebook.com/profile.php?id=100015586867540"><img src={Facebook} alt="facebookIcon"/></a>
    </DivPhone>
    <DivPhone>
    <a href=" https://api.whatsapp.com/send?phone=+37369106651"><img src={Viber} alt="viber" /></a>
    </DivPhone>
  </PhoneDropDownContainer>
)
export default PhoneCall;