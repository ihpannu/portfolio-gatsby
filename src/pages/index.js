import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Picture from '../images/profile.png'

// import Wrapper from '../components/Wrapper'
// import SiteHeader from "../components/Header/Header"
const Wrapper = styled.section`
  max-width: 992px;
  margin: auto;
  padding: 0 1em;
  color: #333233;
  background: #fffeff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

const ProfilePicture = styled.picture`
  width: 200px;
  height: 200px;
  text-alighn:
`;

class IndexPage extends Component {
  render() {
    return <Wrapper>
        <ProfilePicture>
          <img src={Picture} alt=""/>
        </ProfilePicture>
        <h1>I am Harman Pannu</h1>
      </Wrapper>;
  
  }
} 


export default IndexPage


