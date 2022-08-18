import React, {FC} from 'react'
import wind from '../assets/wind.svg'
import pressure from '../assets/pressure.svg'
import UVindex from '../assets/UVindex.svg'
import humidity from '../assets/humidity.svg'
import * as S from '../styles/components'

interface WeatherCharacterProps{
    title: string
    value: string
    img: 'wind' | 'pressure' | 'UVindex' | 'humidity' | 'sunrise' | 'sunset'
    bc?: string
    padding?: number
    margin?: string
}

export const WeatherCharacter: FC<WeatherCharacterProps> = ({img, title, value, bc = '#f6f6f6', padding, margin}) => {
  return (
    <S.Container width={'300px'} height={'100px'} bc={bc} pl={20} br='5px' pAll={padding} mAll={margin} style={{display: 'flex', alignItems: 'center', gap: '30px', justifyContent: 'flex-start'}}>
        {img == 'wind' && <img src={wind} alt="wind" width={50} height={50}/>}
        {img == 'pressure' && <img src={pressure} alt="pressure" width={50} height={50}/>}
        {img == 'UVindex' && <img src={UVindex} alt="UVindex" width={50} height={50}/>}
        {img == 'humidity' && <img src={humidity} alt="humidity" width={50} height={50}/>}
        <div>
            <S.Text color='#B9B9B9' fz={16}>{title}</S.Text>
            <S.Text color='#051037' fw={500} fz={30}>{value}</S.Text>
        </div>
    </S.Container>
  )
}
