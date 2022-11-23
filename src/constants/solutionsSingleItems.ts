import imageSolutionsSingle1 from '@assets/images/solutions_single_1.png'
import imageSolutionsSingle2 from '@assets/images/solutions_single_2.png'
import { ISolutionsSingleItem } from '@interfaces/index'
import { SOLUTIONS_SINGLE_ROUTE } from './router'

const commonContent = [
	{
		name: 'data1',
		heading: 'What is data visualization?',
		text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
	},
	{
		name: 'data2',
		heading: 'Types of data visualizations',
		image: imageSolutionsSingle1,
		text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
		list: [
			'Symbol maps — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
			'Line charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam.',
			'Pie charts — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna.',
			'Tables — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl.',
			'Histograms — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor.',
			'Scatter plots — convallis ex orci, nec sodales urna convallis ac. cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
		],
	},
	{
		name: 'data3',
		heading: 'Data visualization practices',
		image: imageSolutionsSingle2,
		text: 'Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper, orci ipsum scelerisque tortor, at euismod sem lectus sed ex. Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh. Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu. Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae.',
	},
	{
		name: 'data4',
		heading: 'Data visualization in Ensome',
		text: 'Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat odio, ut facilisis eros. Duis in consequat mauris, vel interdum odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget pharetra nunc. Duis mollis ante mauris, vitae volutpat libero rhoncus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus ultrices eros, vel sollicitudin arcu fringilla quis.	Vestibulum porttitor euismod sagittis. Pellentesque scelerisque purus nisi, ac convallis neque bibendum eget. Pellentesque augue nunc, ullamcorper vel sollicitudin sed, auctor nec libero. Vestibulum varius mattis sagittis. Cras pharetra rutrum ante. Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis neque, a sagittis orci leo in quam. Ut convallis ex orci, nec sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean et nisl in magna imperdiet auctor in vehicula arcu.',
	},
]

export const SOLUTIONS_SINGLE_ITEMS: ISolutionsSingleItem[] = [
	{
		id: 'solution-1',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'Data integration',
		content: commonContent,
	},
	{
		id: 'solution-2',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'More data integration',
		content: commonContent,
	},
	{
		id: 'solution-3',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'Big data',
		content: commonContent,
	},
	{
		id: 'solution-4',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'Data warehousing',
		content: commonContent,
	},
	{
		id: 'solution-5',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'Self-service BI',
		content: commonContent,
	},
	{
		id: 'solution-6',
		baseRoute: SOLUTIONS_SINGLE_ROUTE,
		title: 'Data visualization',
		content: commonContent,
	},
]
