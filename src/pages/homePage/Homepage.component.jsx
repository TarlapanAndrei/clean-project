import React from 'react';
import Header from '../../components/header/header.component';

import {HomepageContainer} from './HomePage.styled';
import GreenAndWindow from '../../components/greenAndWindow/greenAndWindow.component';

const Homepage = () =>(
  <HomepageContainer>
    <GreenAndWindow />
    <Header />
  </HomepageContainer>
)
export default Homepage;