import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {selectAllContent, selectLanguage} from '../../redux/content/content.selectors';

import Header from '../../components/header/header.component';

import {HomepageContainer} from './HomePage.styled';
import GreenAndWindow from '../../components/greenAndWindow/greenAndWindow.component';
import OurServices from '../../components/ourServices/OurServices';
import WindowWashing from '../../components/windowWashing/WindowWashing';

const Homepage = ({ selectAllContent, selectLanguage}) =>{
  const  {homePage, OurServicesPage, WindowWash}  = selectAllContent[selectLanguage]
  console.log(homePage)
  return(
  <HomepageContainer>
    <GreenAndWindow homePage={homePage}/>
    <Header />
    <OurServices OurServicesPage={OurServicesPage}/>
    <WindowWashing WindowWash={WindowWash}/>
  </HomepageContainer>
)}
const mapStateToProps = createStructuredSelector({
  selectAllContent: selectAllContent,
  selectLanguage: selectLanguage
})
export default connect(mapStateToProps)(Homepage);