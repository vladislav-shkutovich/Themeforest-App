import { Component } from 'react'
import { IErrorBoundaryProps, IErrorBoundaryState } from '@interfaces/index'

import { ErrorMessage } from './styles'

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
	constructor(props: IErrorBoundaryProps) {
		super(props)
		this.state = { hasError: false }
	}

	static getDerivedStateFromError(error: Error): IErrorBoundaryState {
		return { hasError: error.message }
	}

	render() {
		const { hasError } = this.state
		const { children } = this.props
		if (hasError) {
			return <ErrorMessage>Something went wrong...</ErrorMessage>
		}

		return children
	}
}

export default ErrorBoundary
