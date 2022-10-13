import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', 'Manrope', sans-serif;
  }
  html, body {
		width: 100%;
    height: 100%;
		font-size: 62.5%;
  }
	body {
		& > #root {
			width: 100%;
      height: 100%;
			${theme.paragraphs.paragraph3}
    }
  }
`
