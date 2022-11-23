/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISolutionsSingleArticle } from '@interfaces/index'
import { forwardRef, useEffect } from 'react'
import { ArticleStyled } from './styled'

export const SolutionsSingleArticle: React.FC<ISolutionsSingleArticle> = forwardRef(
	({ name, refs, heading, image, text, list, activeHeading, callback }, ref) => {
		useEffect(() => {
			const observerConfig = {
				root: null,
				threshold: 0.6,
			}

			const handleIntersection = (entries: any): void => {
				entries.forEach(({ target, isIntersecting }: any) => {
					if (target.id !== activeHeading && isIntersecting) {
						setTimeout(() => {
							callback(target.id)
						}, 200)
					}
				})
			}

			const observer = new IntersectionObserver(handleIntersection, observerConfig)

			observer.observe(refs[name].current)

			return () => observer.disconnect()
		}, [activeHeading, callback, name, refs])

		return (
			<ArticleStyled id={name} key={name} ref={ref}>
				<h2>{heading}</h2>
				{image && <img src={image} alt="Solution" />}
				<p>{text}</p>
				{list && (
					<ul>
						{list.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				)}
			</ArticleStyled>
		)
	},
)
