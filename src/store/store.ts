import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import apiReduser from './apiReduser'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

export const store = createStore(apiReduser, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector