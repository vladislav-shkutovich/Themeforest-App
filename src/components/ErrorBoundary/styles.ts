import styled from 'styled-components'

export const ErrorMessage = styled.h1`
	display: flex;
	justify-content: center;
	justify-items: center;
	${({ theme }) => theme.headlines.headline2}
	color: ${({ theme }) => theme.colors.error};
	margin: 5rem;
`
