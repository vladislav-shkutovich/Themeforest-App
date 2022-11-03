import styled from 'styled-components'

export const ContentStyled = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 10rem;
	margin-bottom: 12rem;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.layoutFirst}) {
		margin-bottom: 6rem;
	}
`
