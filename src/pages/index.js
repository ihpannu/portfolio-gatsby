import React from 'react'
import Link from 'gatsby-link'
import {SiteHeader} from '../components/Header/Header'

const IndexPage = () => (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/about/">Go to page 2</Link>
    </div>
);

export default IndexPage
