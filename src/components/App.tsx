import React, { FC } from 'react';
import linkIcon from  '../assets/linkIcon.svg'
import logo from  '../assets/logo.svg'
import * as S from '../styles/components'
import { WeatherCharacter } from './WeatherCharacter';
import { SunsetSunrise } from './SunsetSunrise';
import {useTypedSelector} from '../store/store'
import {Search} from './Search';
import locationIcon from '../assets/locationIcon.svg'
import mapIcon from '../assets/mapIcon.svg'
import calendarIcon from '../assets/calendarIcon.svg'
import homeIcon from '../assets/homeIcon.svg'
import {WeatherPrediction} from '../components/WeatherPrediction'

const App: FC = () =>{

  const currentWeather = useTypedSelector(state => state.currentData)

  const fiveDaysWeather = useTypedSelector(state => state.fiveDaysData)

  const loading = useTypedSelector(state => state.loading)

  function myDate(time: number): Date{
    const timezone = currentWeather?.timezone;
    const dt = time;
    const dateTime = new Date(dt * 1000);
    const toUtc = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000;
    const currentLocalTime = toUtc + 1000 * timezone;
    return new Date(currentLocalTime);
  }

  const date = myDate(currentWeather?.dt)

  console.log(date)

  console.log(date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }))

  const sunrise = myDate(currentWeather?.sys.sunrise)

  const sunset = myDate(currentWeather?.sys.sunset)
  
  return (
      <S.Layout>
        {loading? <div className='loader'></div> : ''}
        <S.Container bc='#e6e6ff'>
          <div className='logo'>
            <div className='logoWrapper'>
              <img src={logo} alt="logo" width={50} height={50}/>
            </div>
            <S.Text fw={300} fz={24}>Weather App</S.Text>
          </div>
          <div className='menu'>
            <div className='menuItem'>
              <img src={homeIcon} alt="homeIcon" />
              <p>Dashboard</p>
            </div>
            <div className='menuItem'>
              <img src={mapIcon} alt="mapIcon" />
              <p>Map</p>
            </div>
            <div className='menuItem'>
              <img src={locationIcon} alt="locationIcon" />
              <p>Saved Location</p>
            </div>
            <div className='menuItem'>
              <img src={calendarIcon} alt="calendarIcon" />
              <p>Calendar</p>
            </div>
          </div>
        </S.Container>
        <S.Container pl={30} pr={30} pt={30}>
          <S.Header>
            <div>
              <S.Text fw={600} fz={24}>{loading? '' : date.toDateString()}</S.Text>
            </div>
            <Search/>
          </S.Header>
          <S.Container>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <S.Text fw={400} fz={18} style={{marginBottom: '10px'}}>Today overview</S.Text>
              <S.Link href='#' style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                <p>More detail</p>
                <img src={linkIcon} alt="linkIcon" width={15} height={15}/>
              </S.Link>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '300px 300px', gap: '20px', marginBottom: '30px'}}>
              <WeatherCharacter img={'wind'} title={'Wind Speed'} value = {loading? '' : currentWeather?.wind.speed + ' km/h'}/>
              <WeatherCharacter img={'humidity'} title={'Humidity'} value = {loading? '' : currentWeather?.main.humidity + '%'}/>
              <WeatherCharacter img={'pressure'} title={'Pressure'} value = {loading? '' : currentWeather?.main.pressure + ' hpa'}/>
              <WeatherCharacter img={'UVindex'} title={'Feels like'} value = {loading? '' : currentWeather?.main.feels_like + '° C'}/>
            </div>
            <WeatherPrediction/>
          </S.Container>
          
        </S.Container>
        <S.Aside>
          <S.Container pAll={30}>
            <S.Header>
              <div>
                <S.Text fw={'bold'} fz={24} color={'#fff'}>{loading? '' : currentWeather?.name}, <span style={{color: '#B9B9B9', fontSize: '14px', fontWeight: 300}}>{currentWeather?.sys.country}</span></S.Text>
                <S.Text color='#B9B9B9'>Population: {loading? '' : fiveDaysWeather?.city.population}</S.Text>
              </div>
              <S.Text color='#fff' fw={'bold'} fz={24}>{loading? '' : date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</S.Text>
            </S.Header>
          
              <img width={60} height={60} src={`http://openweathermap.org/img/w/${loading? '' : currentWeather?.weather[0].icon}.png`}/>
        
            <div style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              paddingBottom: '30px', 
              borderBottom: '1px solid #ffffff92',
              marginBottom: '50px'
              }}>
              <S.Text fz={50} color={'#fff'}>{loading? '' : currentWeather?.main.temp + '° C'}</S.Text>
              <S.Text fz={18} color={'#fff'} style={{textAlign: 'right'}} className='description'>
                {loading? '' : currentWeather?.weather[0].description.split(' ')[0]} <br/> {loading? '' : currentWeather?.weather[0].description.split(' ')[1]}
              </S.Text>
            </div>
            {/* <Chart/> */}
            <SunsetSunrise 
            sunsetTime={loading? '' : sunset.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} 
            sunriseTime={loading? '' : sunrise.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} 
            />
          </S.Container>
        </S.Aside>
      </S.Layout>
  );
}

export default App;
