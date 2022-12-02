import React from 'react'
import { ButtonWithTag } from '@components/ButtonWithTag'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllTags } from '@store/selectors'
import { updateCurrentTags, toggleTag } from '@store/slices/blogSlice'
import { TagsContainerStyled } from './styled'

export const BlogTags: React.FC = () => {
	const allTags = useSelector(selectAllTags)
	const dispatch = useDispatch()

	const handleTag = (title: string) => () => {
		dispatch(toggleTag(title))
		dispatch(updateCurrentTags())
	}

	return (
		<TagsContainerStyled>
			{allTags.map(({ title, isActive }) => (
				<ButtonWithTag key={title} text={title} isActive={isActive} callback={handleTag(title)} />
			))}
		</TagsContainerStyled>
	)
}
