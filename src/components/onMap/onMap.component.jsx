import React from 'react';
import { OnMapContainer} from './onMap.styled';
import Harta from '../../assets/furmetex.jpg';

const OnMap = () =>(
  <OnMapContainer>
    <img src={Harta} alt="harta" />
  </OnMapContainer>
)
export default OnMap;