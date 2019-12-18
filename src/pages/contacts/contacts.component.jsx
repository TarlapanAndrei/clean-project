import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllContent, selectLanguage} from '../../redux/content/content.selectors';
import MapPix from '../../assets/harta.jpg';
import Facebook7 from '../../assets/facebook7.png'; 

import {ContactsContainer, ContactsHeaderContainer, ContactsHeader, Home, DivForHome, DivStart, DivForPictures} from './contacts.styled';

const Contacts = ({selectAllContent, selectLanguage}) =>{
  const { ContactsPage:{intro, divOurAddress, weOnMap} } = selectAllContent[selectLanguage]
  const {FinalP:{address} } = selectAllContent[selectLanguage]
  return(
<ContactsContainer>
  <ContactsHeaderContainer>
    <DivForHome>
     <Home to='/'>
       <p>Home</p>
     </Home>
     </DivForHome>
     <ContactsHeader>
  <h3>{intro}</h3>
     </ContactsHeader>
  </ContactsHeaderContainer>
  <DivStart>
  <p>{divOurAddress}{address}</p>
  </DivStart>
  <DivStart>
    <p>Tel: +373(22)288611</p>
    <p>Mob: +373(69)106651 </p>
  </DivStart>
  <DivStart>
    <p>e-mail: furmetex@curat.md</p>
  </DivStart>
  <DivStart>
    <p>Facebook :<a href="https://www.facebook.com/profile.php?id=100015586867540"><img src={Facebook7} alt="facebook"/></a></p>
  </DivStart>
  <DivForPictures>
   <p>{weOnMap}</p>
    <img src={MapPix} alt="harta"/>
  </DivForPictures>
</ContactsContainer>
)}
const mapStateToProps = createStructuredSelector({
  selectAllContent: selectAllContent,
  selectLanguage: selectLanguage,
})
export default connect(mapStateToProps)(Contacts);