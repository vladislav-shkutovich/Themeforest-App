import { footerDimensions } from '@constants/footerDimensions'

export const getFooterIsIntersecting = (): boolean => {
	const {
		footerHeightDesktop,
		footerHeightTablet,
		footerHeightMobile,
		footerWidthTablet,
		footerWidthMobile,
	} = footerDimensions

	let intersectionOffset = footerHeightDesktop
	if (window.innerWidth < footerWidthTablet) intersectionOffset = footerHeightTablet
	if (window.innerWidth < footerWidthMobile) intersectionOffset = footerHeightMobile

	return (
		window.innerHeight + document.documentElement.scrollTop >=
		document.documentElement.scrollHeight - intersectionOffset
	)
}
