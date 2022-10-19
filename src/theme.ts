const shadows = {
	shadowButton: 'box-shadow: 0px 1.2rem 3rem rgba(24, 92, 255, 0.18);',
	shadowCard1: 'box-shadow: 0 0.2rem 2rem 1.7rem rgba(24, 92, 255, 0.04);',
	shadowCard2: 'box-shadow: 0 1.2rem 3rem 1.7rem rgba(24, 92, 255, 0.04);',
	shadowCard3: 'box-shadow: 0 0.4rem 1.2rem rgba(12, 68, 204, 0.1);',
	shadowDropdown:
		'box-shadow: 0 0.2rem 0.6rem rgba(0, 43, 78, 0.15), 0 0.1rem 0.2rem rgba(0, 43, 78, 0.3);',
}

const colors = {
	primary: '#185CFF',
	hover: '#467DFF',
	secondary: '#002B4E',
	tertiary: '#F0F9FF',
	helperBlue: '#194060',
	helperBlue2: '#607D94',
	helperBlue3: '#C9DCEC',
	black: '#292D33',
	white: '#ffffff',
	grey: '#9497A1',
	background: '#F1F6FA',
	red: '#C14040',
}

const paddings = {}

const margins = {}

const fontSizes = {
	medium: '1.4rem',
	regular: '1.6rem',
	large: '2.0rem',
	xlarge: '2.2rem',
	xxlarge: '3.0rem',
	xxxlarge: '3.8rem',
	xxxxlarge: '6rem',
	achivements: '5rem',
}

const headlinesCommon = `
font-family: 'Manrope';
font-style: normal;
letter-spacing: -0.015em;
`
const headlines = {
	headline1: `
	${headlinesCommon}
	font-weight: 800;
	font-size: 4.6rem;
	line-height: 6rem;
	`,
	headline2: `
	${headlinesCommon}
	font-weight: 800;
	font-size: 3.8rem;
	line-height: 5.6rem;
	`,
	headline3: `
	${headlinesCommon}
	font-weight: 800;
	font-size: 3rem;
	line-height: 4rem;
	`,
	headline4: `
	${headlinesCommon}
	font-weight: 700;
	font-size: 2.2rem;
	line-height: 3.3rem;
	`,
	headline5: `
	${headlinesCommon}
	font-weight: 700;
	font-size: 2rem;
	line-height: 3rem;
	`,
	headline6: `
	${headlinesCommon}
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 2.4rem;
	`,
	headline7: `
	${headlinesCommon}
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.4rem;
	letter-spacing: -0.01em;
	`,
}

const paragraphsCommon = `
font-family: 'Open Sans';
font-style: normal;
letter-spacing: -0.015em;
`
const paragraphs = {
	paragraph1: `
	${paragraphsCommon}
	font-weight: 400;
	font-size: 2rem;
	line-height: 3.3rem;`,
	paragraph2: `
	${paragraphsCommon}
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2.8rem;`,
	paragraph2Bold: `
	${paragraphsCommon}
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 2.8rem;`,
	paragraph3: `
	${paragraphsCommon}
	font-weight: 400;
	font-size: 1.4rem;
	line-height: 2.4rem;`,
	paragraph3Bold: `
	${paragraphsCommon}
	font-weight: 600;
	font-size: 1.4rem;
	line-height: 2.4rem;`,
}

export default {
	shadows,
	colors,
	fontSizes,
	paddings,
	margins,
	headlines,
	paragraphs,
}
