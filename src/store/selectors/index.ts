import { RootState } from 'types'

export const selectCurrentPost = ({ blogState }: RootState) => blogState.currentPost

export const selectAllPosts = ({ blogState }: RootState) => blogState.allPosts

export const selectRelatedPosts = ({ blogState }: RootState) => blogState.relatedPosts

export const selectPostsAreOver = ({ blogState }: RootState) => blogState.postsAreOver

export const selectSearchedPosts = ({ blogState }: RootState) => blogState.searchedPosts

export const selectPopularPosts = ({ blogState }: RootState) => blogState.popularPosts

export const selectPopularPostsCount = ({ blogState }: RootState) => blogState.popularPostsCount

export const selectAllTags = ({ blogState }: RootState) => blogState.allTags

export const selectCurrentTags = ({ blogState }: RootState) => blogState.currentTags
