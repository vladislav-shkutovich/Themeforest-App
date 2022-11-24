import { IAppSliceState } from '@interfaces/index'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: IAppSliceState = {
	currentState: 'Empty state',
	isLoggedIn: false,
}

const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		changeState(state, action: PayloadAction<string>) {
			state.currentState = action.payload
		},
	},
})

export const { changeState } = appSlice.actions
export default appSlice.reducer
