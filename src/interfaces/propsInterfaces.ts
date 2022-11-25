/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, ChangeEventHandler } from 'react'

export interface IErrorBoundaryProps {
	children: ReactNode
}

export interface IErrorBoundaryState {
	hasError: boolean | string
}

export interface IMainLayout {
	children?: React.ReactNode
}

export interface ISearchBarProps {
	data?: any
	callback?: ChangeEventHandler<HTMLInputElement>
}

export interface IBlogPost {
	id: string
	title: string
	previewText: string
	text: string
	date: string
	image: string
	author: string
	category: string
	tags: string[]
	viewsCount: number
	baseRoute: string
}

export interface ISolutionsSingleArticle {
	name: string
	heading: string
	image?: string
	text: string
	list?: string[]
	ref?: any
	refs?: any
	activeHeading?: string
	callback?: any
}

export interface IYouTubeModal {
	isOpen: boolean
	handleOpening: () => void
}
