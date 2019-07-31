import * as React from 'react'
import { createGlobalStyle } from 'styled-components'

const Dissolver = React.lazy(() => import('components/Crypto'))

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Dissolver />
    </React.Suspense>
  </React.Fragment>
)

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    font-family: sans-serif;
  }
  * {
    line-height: 1;
  }
  a, a:hover, a:visited, a:active {
    text-decoration: none;
    color: inherit;
  }
`
