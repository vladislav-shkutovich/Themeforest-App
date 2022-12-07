import { IOurPricingCard } from '@interfaces/index'

export const OUR_PRICING_CARDS: IOurPricingCard[] = [
	{
		title: 'Free trial',
		cost: '$0',
		description: ['For small teams – 5 users', 'Community support'],
		key: 'free',
	},
	{
		title: 'Lite',
		cost: '$19',
		description: ['For small teams – 15 users', 'Individual support', 'Individual data – 60GB'],
		key: 'lite',
	},
	{
		title: 'Basic',
		cost: '$29',
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
		cost: '$119',
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
