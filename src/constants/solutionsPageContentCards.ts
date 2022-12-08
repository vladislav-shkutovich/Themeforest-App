/* eslint-disable prettier/prettier */
import solutionsIcon1 from '@assets/icons/icon_solutions_1.svg'
import solutionsIcon2 from '@assets/icons/icon_solutions_2.svg'
import solutionsIcon3 from '@assets/icons/icon_solutions_3.svg'
import solutionsIcon4 from '@assets/icons/icon_solutions_4.svg'
import solutionsIcon5 from '@assets/icons/icon_solutions_5.svg'
import solutionsIcon6 from '@assets/icons/icon_solutions_6.svg'
import { ISolutionsContentCard } from '@interfaces/index'

export const SOLUTIONS_PAGE_CONTENT_CARDS: ISolutionsContentCard[] = [
	{
		id: 'solution-1',
		image: solutionsIcon1,
		title: 'Data integration',
		text:
			'Extract, transform, load (ETL) or extract, load, transform (ELT); data governance (security, availability, quality) implementation.',
	},
	{
		id: 'solution-2',
		image: solutionsIcon2,
		title: 'More data integration',
		text:
			'Data preparation and management; machine learning (ML); designing and implanting artificial intelligence (AI) solutions.',
	},
	{
		id: 'solution-3',
		image: solutionsIcon3,
		title: 'Big data',
		text:
			'Big data infrastructure setup and support.; big data quality and security management; big data capture, analysis and reporting.',
	},
	{
		id: 'solution-4',
		image: solutionsIcon4,
		title: 'Data warehousing',
		text:
			'The process of constructing and using a data warehouse. Data warehouse and data marts design and implementation.',
	},
	{
		id: 'solution-5',
		image: solutionsIcon5,
		title: 'Self-service BI',
		text:
			'Business intelligence; data analytics infrastructure design and implementation; scheduled analytics querying and reporting.',
	},
	{
		id: 'solution-6',
		image: solutionsIcon6,
		title: 'Data visualization',
		text:
			'Interactive dashboarding; custom and pre-built visuals; multiple visualization techniques (symbol maps, line charts, pie charts...)',
	},
]
