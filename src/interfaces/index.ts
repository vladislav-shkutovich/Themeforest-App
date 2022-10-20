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

export interface IHomepagePriceCard {
	title: string
	cost: string
	description: string[]
	key: string
}
