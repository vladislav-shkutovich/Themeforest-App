import { IBlogPost } from './propsInterfaces'

export interface IAppSliceState {
	currentState: string
	isLoggedIn?: boolean
}

export interface IBlogTag {
	title: string
	isActive: boolean
}

export interface IBlogSliceState {
	currentPost: IBlogPost
	allPosts: IBlogPost[]
	filteredPosts: IBlogPost[]
	allTopicsTag: IBlogTag
	restTags: IBlogTag[]
	currentTags: IBlogTag[]
	searchedPosts: IBlogPost[]
	popularPosts: IBlogPost[]
	relatedPosts: IBlogPost[]
	popularPostsCount: number
	postsAreOver: boolean
}
