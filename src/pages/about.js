import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"


const MainWrapper = styled.div`
  a {
    color = #16a085;
  }
`;

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
