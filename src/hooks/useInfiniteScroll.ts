import { IOurTeamContentCard } from '@interfaces/index'
import { getFooterIsIntersecting } from '@helpers/getFooterIsIntersecting'
import { useState, useCallback } from 'react'

export const useInfiniteScroll = (itemsToObserve: IOurTeamContentCard[]) => {
	const [indexToScroll, setIndexToScroll] = useState(4)

	const handleScroll = useCallback(() => {
		const footerIsIntersecting = getFooterIsIntersecting()
		if (footerIsIntersecting && indexToScroll < itemsToObserve.length) {
			setIndexToScroll((prevState) => prevState + 2)
		}
	}, [indexToScroll, itemsToObserve.length])

	return { indexToScroll, handleScroll }
}
