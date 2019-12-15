import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectAllContent, selectLanguage} from '../../redux/content/content.selectors';

import Header from '../../components/header/header.component';

import {HomepageContainer} from './HomePage.styled';
import GreenAndWindow from '../../components/greenAndWindow/greenAndWindow.component';
import OurServices from '../../components/ourServices/OurServices';
import WindowWashing from '../../components/windowWashing/WindowWashing';
import PhoneCall from '../../components/phoneCall/phoneCall.component';
import { selectStatus } from '../../redux/phoneCall/phoneCall.selectors';
const Homepage = ({ selectAllContent, selectLanguage, selectStatus}) =>{
  const  {homePage, OurServicesPage, WindowWash}  = selectAllContent[selectLanguage]
  console.log(homePage)
  return(
  <HomepageContainer>
    <GreenAndWindow homePage={homePage}/>
    <Header />
    <OurServices OurServicesPage={OurServicesPage}/>
    <WindowWashing WindowWash={WindowWash}/>
    { selectStatus?
      (<PhoneCall />): null }
  </HomepageContainer>
)}
const mapStateToProps = createStructuredSelector({
  selectAllContent: selectAllContent,
  selectLanguage: selectLanguage,
  selectStatus: selectStatus
})
export default connect(mapStateToProps)(Homepage);