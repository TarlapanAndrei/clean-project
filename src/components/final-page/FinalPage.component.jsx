import React from 'react';
import { FinalPageContainer, FinalPageContent } from './final-page.styled';
const FinalPage = ({FinalP:{address}}) =>(
  <FinalPageContainer>
    <FinalPageContent>
      <p className='sity'>{address}</p>
      <p>Tel: +373(22)288611</p>
      <p>Mob: +373(69)106651</p>
      <p>e-mail: f@furmetex-curat.md</p>
    </FinalPageContent>
  </FinalPageContainer>
)

export default FinalPage;