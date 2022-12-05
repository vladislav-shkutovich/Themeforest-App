import { RootState } from 'types'

export const selectCurrentPost = ({ blogState }: RootState) => blogState.currentPost

export const selectAllPosts = ({ blogState }: RootState) => blogState.allPosts

export const selectPostsAreOver = ({ blogState }: RootState) => blogState.postsAreOver

export const selectSearchedPosts = ({ blogState }: RootState) => blogState.searchedPosts

export const selectRelatedPosts = ({ blogState }: RootState) => blogState.relatedPosts

export const selectPopularPosts = ({ blogState }: RootState) => blogState.popularPosts

export const selectPopularPostsCount = ({ blogState }: RootState) => blogState.popularPostsCount

export const selectAllTopicsTag = ({ blogState }: RootState) => blogState.allTopicsTag

export const selectRestTags = ({ blogState }: RootState) => blogState.restTags

export const selectCurrentTags = ({ blogState }: RootState) => blogState.currentTags
