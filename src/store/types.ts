export const GET_WEATHER = 'GET_WEATHER'
export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const GET_FIVE_DAYS_WEATHER = 'GET_FIVE_DAYS_WEATHER'

interface IWeather{
    id: number, 
    main: string, 
    description: string, 
    icon: string
}

interface IMain{
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
}

export interface IWeatherData {
    dt: number
    main: IMain
    name: string
    sys: {
        country: string
        sunrise: number
        sunset: number
    }
    timezone: number
    visibility: number
    weather: IWeather[]
    wind: {speed: number, deg: number, gust: number}
}

interface IList{
    dt: number
    dt_txt: string
    main: IMain
    sys: {
        pod: 'd' | 'n'
    }
    visibility: number
    weather: IWeather
    wind: {speed: number, deg: number, gust: number}
}

// interface IError{
//     cod: number;
//     message: string;
// }

export interface WeatherState{
    currentData: IWeatherData | null;
    fiveDaysData: IFiveDaysWeather | null;
    loading: boolean;
    error: string
}

interface getWeatherAction{
    type: typeof GET_WEATHER;
    payload: {
        resCurrent: IWeatherData,
        resFiveDays: IFiveDaysWeather
    };
}

interface setLoadingAction{
    type: typeof SET_LOADING;
}

interface setErrorAction{
    type: typeof SET_ERROR;
    payload: string;
}

// interface getFiveDaysWeatherAction{
//     type: typeof GET_FIVE_DAYS_WEATHER;
//     payload: IFiveDaysWeather
// }

export type weatherAction = getWeatherAction | setErrorAction | setLoadingAction


export interface IFiveDaysWeather {
    city: {
        country: string
        name: string
        population: number
        sunrise: number
        sunset: number
    }
    list: IList[]
}
