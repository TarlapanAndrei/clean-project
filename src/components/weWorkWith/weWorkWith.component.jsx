import React from 'react';
import Andis from '../../assets/friends/Andis.jpg';
import MoldTelecom from '../../assets/friends/MoldTelecom.jpg';
import CurteaConturi from '../../assets/friends/CurteaConturi.jpg';
import Universitatea from '../../assets/friends/Universitatea.jpg';
import BirouVamal from '../../assets/friends/BirouVamal.jpg';
import Jardi from '../../assets/friends/Jardi.jpg';
import Medazur from '../../assets/friends/Medazur.jpg';
import Agentia from '../../assets/friends/Agentia.jpg';
import Beneton from '../../assets/friends/Beneton.jpg';
import Ambasada from '../../assets/friends/Ambasada.jpg';
import Gipfel from '../../assets/friends/Gipfel.jpg';
import { WeWorkWithContainer, EveryFrienDiv, WeWorkWithContainerGeneral, WeWorckWithHeader } from './weWorkWith.styled';
const WeWorkWith = ({Partners:{PartnersHeader}}) =>(
  <WeWorkWithContainerGeneral>
    <WeWorckWithHeader>
      <h3>{PartnersHeader}</h3>
    </WeWorckWithHeader>
  <WeWorkWithContainer>
    <EveryFrienDiv>
       <img src={MoldTelecom} alt="moldTelecom" title="MOLDTELECOM" />
    </EveryFrienDiv>
    <EveryFrienDiv>
       <img src={CurteaConturi} alt="CurteaConturi" title="Curtea de Conture R.Moldova" />
    </EveryFrienDiv>
    <EveryFrienDiv>
       <img src={Universitatea} alt="Universitatea" title="Universitatea Tehnica din Moldova" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Andis} alt="andis" title="Andy's Pizza" />
    </EveryFrienDiv>
    <EveryFrienDiv>
       <img src={BirouVamal} alt="BiroulVamal" title="Biroul Vamal Centru Chisinau" />
    </EveryFrienDiv>
    <EveryFrienDiv>
       <img src={Jardi} alt="Jardi" title="Jardi SRL" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Medazur} alt="Medazur" title="Medazur Med Spa" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Agentia} alt="Agentia" title="Agentia Nationala pentru Cercetare si Dezvoltare" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Beneton} alt="Beneton" title="UNITED COLORS OF BENETTON" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Ambasada} alt="Ambasada" title="Ambasada SUA" />
    </EveryFrienDiv>
    <EveryFrienDiv>
      <img src={Gipfel} alt="Gipfel" title="Gipfel SRL" />
    </EveryFrienDiv>
  </WeWorkWithContainer>
  </WeWorkWithContainerGeneral>
)
export default WeWorkWith;