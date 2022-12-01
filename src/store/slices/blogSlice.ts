import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { IBlogSliceState } from '@interfaces/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// ? использую "магические числа", чтобы не засорять константы
const initialState: IBlogSliceState = {
	allPosts: BLOG_PAGE_POSTS,
	searchedPosts: BLOG_PAGE_POSTS,
	popularPosts: BLOG_PAGE_POSTS.sort((prev, next) => next.viewsCount - prev.viewsCount),
	relatedPosts: BLOG_PAGE_POSTS.sort(
		(prev, next) => new Date(prev.date).getTime() - new Date(next.date).getTime(),
	).slice(0, 3),
	relatedPostsCount: 3,
	postsAreOver: false,
}

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		showMorePosts(state, action: PayloadAction<number>) {
			const nextCount = state.relatedPostsCount + action.payload
			if (nextCount < state.allPosts.length) {
				state.relatedPosts = state.allPosts.slice(0, nextCount)
				state.relatedPostsCount += action.payload
			} else {
				state.postsAreOver = true
				state.relatedPosts = state.allPosts
			}
		},
		searchPosts(state, action: PayloadAction<string>) {
			state.searchedPosts = state.allPosts.filter((item) =>
				item.title.toLowerCase().includes(action.payload),
			)
		},
	},
})

export const { showMorePosts, searchPosts } = blogSlice.actions
export default blogSlice.reducer
