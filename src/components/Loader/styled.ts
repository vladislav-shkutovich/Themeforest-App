import styled, { keyframes } from 'styled-components'

const spinnerAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const StyledLoader = styled.div`
	position: absolute;
	left: 50vw;
	top: 50vh;
	display: flex;
	align-self: center;
	justify-self: center;
	z-index: 10;
	border: 0.9rem solid ${({ theme }) => theme.colors.helperBlue3};
	border-top: 0.9rem solid ${({ theme }) => theme.colors.primary};
	border-radius: 50%;
	width: 7rem;
	height: 7rem;
	animation: ${spinnerAnimation} 0.8s linear infinite;
`
