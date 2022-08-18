import React, { FC, useRef } from 'react'
import { useTypedSelector } from '../store/store'
import * as S from '../styles/components'

export const WeatherPrediction: FC= () => {

    const fiveDaysWeather = useTypedSelector(state => state.fiveDaysData)

    const scrollRef = useRef(null)

  return (
    <S.Container>
        <S.Text fw={400} fz={18} style={{marginBottom: '10px'}}>Weather Prediction</S.Text>
            <div className='scrollBlock' ref={scrollRef}>
                <S.Prediction>
                    {fiveDaysWeather?.list.map(listItem => (
                        <div key={listItem.dt_txt} className='predictionCard'>
                            <img src={`http://openweathermap.org/img/w/${listItem.weather[0].icon}.png`} alt="wetherIcon" />
                            <div className='text'>
                                <S.Text color='#B9B9B9' fz={13}>{new Date(listItem.dt * 1000).toDateString().split(' ')[1]} {new Date(listItem.dt * 1000).toDateString().split(' ')[2]}</S.Text>
                                <S.Text color='#051037' fz={16} margin='10px 0 0 0'>{listItem.main.temp}° C</S.Text>
                            </div>
                            <S.Text color='#7e96ec'>
                                {new Date(listItem.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
                            </S.Text>
                        </div>
                    ))}
                </S.Prediction>
            </div>
    </S.Container>
  )
}
