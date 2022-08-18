import { WeatherState, weatherAction} from "./types"

const initialState: WeatherState = {
    currentData: null,
    fiveDaysData: null,
    loading: false,
    error: ''
}

export default function apiReduser(state: WeatherState = initialState, action: weatherAction): WeatherState {
    console.log(action)
    switch (action.type) {
        case "GET_WEATHER":
            return {
                currentData: action.payload.resCurrent,
                loading: false,
                error: '',
                fiveDaysData: action.payload.resFiveDays
            }
        case "SET_LOADING":
            return {
                ...state,
                loading: true
            }
        
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
                loading: false
            }
    
        default:
            return state
            
    }
}