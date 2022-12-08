/* eslint-disable prettier/prettier */
import machineLearningIcon from '@assets/icons/services_icon_machine_learning.svg'
import embedIcon from '@assets/icons/services_icon_embed.svg'
import accessIcon from '@assets/icons/services_icon_access.svg'
import dataAnalyticsIcon from '@assets/icons/services_icon_data_analytics.svg'
import bigDataIcon from '@assets/icons/services_icon_big_data.svg'
import artificalIcon from '@assets/icons/services_icon_artifical.svg'
import { IServicesContentCard } from '@interfaces/index'

export const SERVICES_PAGE_CONTENT_CARDS: IServicesContentCard[] = [
	{
		id: 'service-1',
		image: machineLearningIcon,
		title: 'Machine learning',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Machine learning',
	},
	{
		id: 'service-2',
		image: embedIcon,
		title: 'Embed analytics',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Embed analytics',
	},
	{
		id: 'service-3',
		image: accessIcon,
		title: 'Access control',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Access control',
	},
	{
		id: 'service-4',
		image: dataAnalyticsIcon,
		title: 'Data analytics',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Data analytics',
	},
	{
		id: 'service-5',
		image: bigDataIcon,
		title: 'Big data consulting',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Big data consulting',
	},
	{
		id: 'service-6',
		image: artificalIcon,
		title: 'Artificial intelligence',
		text:
			'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis autem vel eum iure.',
		key: 'Artificial intelligence',
	},
]
