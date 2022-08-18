import {weatherAction, GET_WEATHER, SET_ERROR, SET_LOADING} from '../store/types'
import {ThunkAction} from 'redux-thunk'
import {RootState} from '../store/store'
import axios from 'axios'

export const getWeather = (lat?: number, lon?: number, city?: string): ThunkAction<void, RootState, {}, weatherAction> => {
    return async dispatch => {
        try {
            const resCurrent = city
                ? await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9ccd36d178811e416da9bbe12bd3aa76&units=metric`)
                : await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ccd36d178811e416da9bbe12bd3aa76&units=metric`)
            const resFiveDays = city
                ? await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=9ccd36d178811e416da9bbe12bd3aa76&units=metric`)
                : await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9ccd36d178811e416da9bbe12bd3aa76&units=metric`)
            dispatch({
                type: GET_WEATHER,
                payload: {
                    resCurrent: resCurrent.data,
                    resFiveDays: resFiveDays.data
                }
            })
        } catch (error) {
            dispatch({
                type: SET_ERROR,
                payload: error.response.data.message
            })
        }
    }
}

export const setLoading = (): weatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (error: string): weatherAction => {
    return {
        type: SET_ERROR,
        payload: error
    }
}
