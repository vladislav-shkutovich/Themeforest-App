import { IHomepagePriceCard } from '@interfaces/index'

export const HOMEPAGE_PRICE_CARDS: IHomepagePriceCard[] = [
	{
		title: 'Free trial',
		cost: '$0',
		description: ['For small teams – 5 users', 'Community support'],
		key: 'free',
	},
	{
		title: 'Lite',
		cost: '$99',
		description: ['For small teams – 15 users', 'Individual support', 'Individual data – 60GB'],
		key: 'lite',
	},
	{
		title: 'Basic',
		cost: '$0',
		description: [
			'For big teams – 30 users',
			'Individual support',
			'Individual data – 120GB',
			'Advanced permissions',
		],
		key: 'basic',
	},
	{
		title: 'For enterprises',
		cost: 'Custom',
		description: [
			'Unlimited team members',
			'Individual support',
			'Unlimited Individual data',
			'Advanced permissions',
			'Data history',
			'Audit log',
			'All functions included',
		],
		key: 'custom',
	},
]
