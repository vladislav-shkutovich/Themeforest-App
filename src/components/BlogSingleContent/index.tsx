import { ChangeEventHandler } from 'react'
import { BLOG_PAGE_TAGS } from '@constants/blogPageTags'
import { CategoriesList } from '@components/CategoriesList'
import { SearchBar } from '@components/SearchBar'
import { BlogSingleItem } from '@components/BlogSingleItem'
import { BlogPopularPosts } from '@components/BlogPopularPosts'
import { BlogRelatedPosts } from '@components/BlogRelatedPosts'
import { ButtonWithTag } from '@components/ButtonWithTag'
import { IBlogPost } from '@interfaces/index'
import { useDispatch, useSelector } from 'react-redux'
import { selectSearchedPosts } from '@store/selectors'
import { searchPosts } from '@store/slices/blogSlice'

import {
	BlogSingleContentStyled,
	NavigationStyled,
	ContentStyled,
	TagsContainerStyled,
} from './styled'

export const BlogSingleContent: React.FC<{ currentPost: IBlogPost }> = ({ currentPost }) => {
	const searchedPosts = useSelector(selectSearchedPosts)
	const dispatch = useDispatch()

	const handleSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
		e.preventDefault()

		dispatch(searchPosts(e.target.value.toLowerCase()))
	}

	return (
		<BlogSingleContentStyled>
			<ContentStyled>
				<BlogSingleItem currentPost={currentPost} />
				<BlogRelatedPosts />
			</ContentStyled>

			<NavigationStyled>
				<SearchBar callback={handleSearch} data={searchedPosts[0]} />

				<h4>All posts</h4>
				<CategoriesList list={searchedPosts} />

				<BlogPopularPosts />

				<h4>Tags</h4>
				<TagsContainerStyled>
					{/* // todo убрать в store */}
					{BLOG_PAGE_TAGS.map((item) => (
						<ButtonWithTag key={item} text={item} isSelected={false} />
					))}
				</TagsContainerStyled>
			</NavigationStyled>
		</BlogSingleContentStyled>
	)
}
