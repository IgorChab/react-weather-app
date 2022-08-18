import React, { FC } from 'react'
import * as S from '../styles/components'
import sunset from '../assets/sunset.svg'
import sunrise from '../assets/sunrise.svg'

interface SunsetSunriseProps{
    sunsetTime: string,
    sunriseTime: string
}

export const SunsetSunrise: FC<SunsetSunriseProps> = ({sunriseTime, sunsetTime}) => {
    return(
        <div>
            <S.Text color={'#fff'} fz={16} fw={600} margin={'0 0 10px 0'}>Sunset & Sunrise</S.Text>
            <S.Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} bc={'#ffffff47'} width={'100%'} br={'5px'} height={'80px'} pAll={20} mAll={'0 0 10px 0'}>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <img src={sunrise} alt="sunrise" width={40} height={40}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <S.Text fz={14} color={'#fff'}>Sunrise</S.Text>
                        <S.Text fz={24} color={'#fff'}>{sunriseTime}</S.Text>
                    </div>
                </div>
                {/* <S.Text fz={14} color={'#fff'}>{new Date().getHours() - Number(sunriseTime.split(':')[0]) === 0? 'right now' : new Date().getHours() - Number(sunriseTime.split(':')[0]) + ' hour ago'}</S.Text> */}
            </S.Container>
            <S.Container style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} bc={'#ffffff47'} width={'100%'} br={'5px'} height={'80px'} pAll={20} mAll={'0 0 10px 0'}>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                    <img src={sunset} alt="sunrise" width={40} height={40}/>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <S.Text fz={14} color={'#fff'}>Sunset</S.Text>
                        <S.Text fz={24} color={'#fff'}>{sunsetTime}</S.Text>
                    </div>
                </div>
                {/* <S.Text fz={14} color={'#fff'}>{new Date().getHours() - Number(sunsetTime.split(':')[0]) === 0? 'right now' : new Date().getHours() - Number(sunsetTime.split(':')[0]) + ' hour ago'}</S.Text> */}
            </S.Container>
        </div>
    )
}
