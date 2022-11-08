/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEventHandler, ReactNode } from 'react'

export interface IErrorBoundaryProps {
	children: ReactNode
}

export interface IErrorBoundaryState {
	hasError: boolean | string
}

export interface IMainLayout {
	children?: React.ReactNode
}

export interface ILinkItems {
	name: string
	route: string
}

export interface IHomepageBenefitsCard {
	icon: string
	heading: string
	text: string
	key: string
}

export interface ITestimonials {
	photo: string
	name: string
	position: string
	text: string
	key: string
}

export interface IOurPricingCard {
	title: string
	cost: string
	description: string[]
	key: string
}

export interface IServicesContentCard {
	id: string
	image: string
	title: string
	text: string
	key: string
}

export interface IServicesSingleItem {
	id: string
	baseRoute: string
	title: string
	subtitle: string
	key: string
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

export interface IOurTeamContentCard {
	id: string
	firstName: string
	lastName: string
	email: string
	role: string
	photo: string
	description: string
	links: string[]
	baseRoute: string
}

export interface IFAQsContentCard {
	id: string
	title: string
	text: string
	isOpen: boolean
}
