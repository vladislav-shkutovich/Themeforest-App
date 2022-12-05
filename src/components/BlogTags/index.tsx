import React, { useState, useRef, useLayoutEffect } from 'react'
import { ButtonWithTag } from '@components/ButtonWithTag'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllTopicsTag, selectCurrentTags, selectRestTags } from '@store/selectors'
import { toggleTag, resetTags, updatePosts } from '@store/slices/blogSlice'
import { TagsContainerStyled } from './styled'

export const BlogTags: React.FC = () => {
	const { title: allTopicsTitle, isActive: allTopicsIsActive } = useSelector(selectAllTopicsTag)
	const restTags = useSelector(selectRestTags)
	const currentTags = useSelector(selectCurrentTags)
	const dispatch = useDispatch()
	const containerRef = useRef<HTMLDivElement>(null)
	const [allTopicsDisabled, setAllTopicsDisabled] = useState(true)

	useLayoutEffect(() => {
		if (containerRef.current !== null) {
			containerRef.current.scrollIntoView({
				block: 'center',
				inline: 'nearest',
			})
		}
	}, [currentTags])

	const handleToggle = (title: string) => () => {
		dispatch(toggleTag(title))
		dispatch(updatePosts())
		setAllTopicsDisabled(false)
	}

	const handleReset = () => {
		dispatch(resetTags())
		dispatch(updatePosts())
		setAllTopicsDisabled(true)
	}

	return (
		<TagsContainerStyled ref={containerRef}>
			<ButtonWithTag
				key={allTopicsTitle}
				text={allTopicsTitle}
				isActive={allTopicsIsActive}
				callback={handleReset}
				disabled={allTopicsDisabled}
			/>
			{restTags.map(({ title, isActive }) => (
				<ButtonWithTag
					key={title}
					text={title}
					isActive={isActive}
					callback={handleToggle(title)}
				/>
			))}
		</TagsContainerStyled>
	)
}
