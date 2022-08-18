import React, {useState, useEffect, FormEvent, FC} from 'react'
import * as S from '../styles/components'
import { useDispatch } from 'react-redux';
import searchIcon from '../assets/searchIcon.svg'
import { getWeather, setError, setLoading} from '../store/actions';
import { ThunkDispatch } from 'redux-thunk';
import {RootState} from '../store/store'
import {weatherAction} from '../store/types'
import {useTypedSelector} from '../store/store'
import errorIcon from '../assets/error.svg'


export const Search: FC = () => {

    const dispatch: ThunkDispatch<RootState, {}, weatherAction> = useDispatch()

    const [city, setCity] = useState('')

    const [endAnimate, setEndAnimate] = useState(false)

    const apiError = useTypedSelector(state => state.error)

    const searchHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!city){
            dispatch(setError('City is required'))
        } else {
            dispatch(getWeather(undefined, undefined, city))
        }
        setCity('')
        if(apiError){
            setEndAnimate(false)
        }
    }

    useEffect(() => {
        dispatch(setLoading())
        navigator.geolocation.getCurrentPosition((coord) => {
            dispatch(getWeather(coord.coords.latitude, coord.coords.longitude))
        }, error => {
            dispatch(getWeather(undefined, undefined, 'London'))
        })
    }, [])

  return (
    <>
        <form onSubmit={e => searchHandler(e)}>
            <S.InputField>
                <S.Input placeholder='Search location here' style={{display: 'block'}} value={city} onChange={e => setCity(e.target.value)}></S.Input>
                <label htmlFor="Btn">
                    <img src={searchIcon} alt="searchIcon"/>
                </label>
                <input type={'submit'} id='Btn' style={{display: 'none'}}/>
            </S.InputField>
        </form>
        <S.Error animate={apiError? true : false} endAnimate={endAnimate? true : false} onAnimationEnd={(e) => {setTimeout(() => {setEndAnimate(true)}, 2000)}}>
            {apiError}
            <img src={errorIcon} alt="errorIcon" width={30} height={30}/>
        </S.Error>
    </>
  )
}

