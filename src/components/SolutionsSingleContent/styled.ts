import styled from 'styled-components'

export const SolutionsSingleContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	column-gap: 5rem;
	margin: 12rem 0;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin: 6rem 0;
		text-align: center;
	}
`

export const NavigationStyled = styled.div`
	display: flex;
	flex-direction: column;
	height: max-content;

	position: sticky;
	top: 15rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.solutionsSingleFirst}) {
		display: none;
	}
`

export const NavigationButton = styled.button<{ activeHeading: string; name: string }>`
	border: none;
	background: none;
	${({ theme }) => theme.headlines.headline7}
	color: ${({ theme }) => theme.colors.black};
	padding: 2rem 3rem;
	border-left: 0.5rem solid
		${({ theme, activeHeading, name }) =>
			activeHeading === name ? theme.colors.primary : theme.colors.helperBlue3};
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.colors.primary};
	}
`

export const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 7rem;
	width: minmax(min-content, 63.5rem);
	max-width: 63.5rem;
`
