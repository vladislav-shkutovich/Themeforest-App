import styled from 'styled-components'

export const ButtonsSliderContainer = styled.div`
	display: flex;
	column-gap: 1.5rem;
`

export const ButtonSliderDefaultStyled = styled.button`
	display: flex;
	border: none;
	background: none;

	& > * {
		fill: ${({ theme }) => theme.colors.secondary};
	}

	:disabled {
		& > * {
			fill: ${({ theme }) => theme.colors.helperBlue3};
		}
	}

	:hover:not([disabled]) {
		& > * {
			transform: scale(1.05);
		}
	}

	:active:not([disabled]) {
		& > * {
			transform: scale(0.99);
		}
	}
`
