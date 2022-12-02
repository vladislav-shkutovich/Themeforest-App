import { BLOG_PAGE_POSTS } from '@constants/blogPagePosts'
import { BLOG_PAGE_TAGS } from '@constants/blogPageTags'
import { IBlogPost, IBlogSliceState } from '@interfaces/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IBlogSliceState = {
	currentPost: BLOG_PAGE_POSTS[0],
	allPosts: BLOG_PAGE_POSTS,
	allTags: BLOG_PAGE_TAGS,
	currentTags: [BLOG_PAGE_TAGS[0]],
	searchedPosts: BLOG_PAGE_POSTS,
	popularPosts: [],
	relatedPosts: [],
	popularPostsCount: 3,
	postsAreOver: false,
}

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		setCurrentPost(state, action: PayloadAction<IBlogPost>) {
			state.currentPost = action.payload
		},
		setRelatedPosts(state) {
			state.relatedPosts = state.allPosts
				.filter(
					(item) =>
						item.tags.some((tag) => state.currentPost.tags.includes(tag)) &&
						item.id !== state.currentPost.id,
				)
				.slice(0, 3)
		},
		setPopularPosts(state) {
			state.popularPosts = state.allPosts.sort((prev, next) => next.viewsCount - prev.viewsCount)
		},
		updateCurrentTags(state) {
			const allTopicsTag = state.allTags.find((item) => item.title === 'All topics')
			if (allTopicsTag)
				allTopicsTag.isActive = !state.allTags.slice(1).some((item) => item.isActive)
			state.currentTags = state.allTags.filter((item) => item.isActive)
		},
		toggleTag(state, action) {
			const clickedTag = state.allTags.find((item) => item.title === action.payload)
			if (clickedTag) clickedTag.isActive = !clickedTag.isActive
		},
		showMorePosts(state, action: PayloadAction<number>) {
			const nextCount = state.popularPostsCount + action.payload
			if (nextCount < state.popularPosts.length) {
				state.popularPostsCount += action.payload
			} else {
				state.popularPostsCount += action.payload
				state.postsAreOver = true
			}
		},
		searchPosts(state, action: PayloadAction<string>) {
			state.searchedPosts = state.allPosts.filter((item) =>
				item.title.toLowerCase().includes(action.payload),
			)
		},
	},
})

export const {
	setCurrentPost,
	setRelatedPosts,
	setPopularPosts,
	updateCurrentTags,
	toggleTag,
	showMorePosts,
	searchPosts,
} = blogSlice.actions
export default blogSlice.reducer
