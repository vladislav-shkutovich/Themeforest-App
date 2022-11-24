import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import {
// 	FLUSH,
// 	REHYDRATE,
// 	PAUSE,
// 	PERSIST,
// 	PURGE,
// 	REGISTER,
// 	persistStore,
// 	persistReducer,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '@store/sagas/index'

import appSliceReducer from '@store/slices/appSlice'

const rootReducer = combineReducers({
	appState: appSliceReducer,
})

// const persistConfig = {
// 	key: 'root',
// 	storage,
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
	// reducer: persistedReducer,
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			// serializableCheck: {
			// 	ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			// },
		}).concat(sagaMiddleware),
})

// export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
