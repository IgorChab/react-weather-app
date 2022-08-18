import styled, { css, keyframes } from 'styled-components'

 export const Layout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr 400px;
  height: 100%;
  .loader{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 10000;
    background-color: #fff;
  }
`
interface ContainerProps {
    width?: string
    height?: string
    bc?: string
    pt?: number
    pl?: number
    pb?: number
    pr?: number
    pAll?: number
    br?: string
    mAll?: string
}
export const Container = styled.div<ContainerProps>`
  width: ${({width}) => width};
  height: ${({height}) => height};
  background-color: ${({bc}) => bc};
  padding-top: ${({pt}) => pt + 'px'};
  padding-bottom: ${({pb}) => pb + 'px'};
  padding-left: ${({pl}) => pl + 'px'};
  padding-right: ${({pr}) => pr + 'px'};
  padding: ${({pAll}) => pAll + 'px'};
  border-radius: ${({br}) => br};
  margin: ${({mAll}) => mAll};
  .description::first-letter{
    text-transform: uppercase;
  }
  .scrollBlock{
    overflow-x: auto;
  }
  .logo{
    padding: 22px 0 0 22px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 50px;
    .logoWrapper{
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #839EFF;
      border-radius: 50%;
      width: 65px;
      height: 65px;
    }
  }
  .menu{
    display: flex;
    flex-direction: column;
    gap: 10px;
    .menuItem{
      display: flex;
      gap: 10px;
      padding: 15px 0;
      padding-left: 40px;
      p{
        font-weight: 300;
      }
      &:hover{
        cursor: pointer;
        color: #839EFF;
      }
    }
  }
`
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`
interface textProps {
  fz?: number,
  color?: string,
  fw?: 'bold' | 400 | 500 | 600 | 700 | 800 | 300 | 200
  margin?: string
}

export const Text = styled.div<textProps>`
  font-size: ${({fz = 14}) => fz + 'px'};
  font-weight: ${({fw = 400}) => fw};
  color: ${({color = '#000'}) => color};
  margin: ${({margin}) => margin};
`

export const InputField = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 10px;
  width: 350px;
  label{
    flex-shrink: 0;
    cursor: pointer;
    background-color: #f6f6f6;
    padding: 10px 15px;
    border-radius: 10px;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f6f6f6;
  border-radius: 10px;
  padding: 10px 20px;
  width: 100%;
`

export const Aside = styled.div`
  width: 100%;
  height: 100%;
  /* background-color: #000d4e; */
  background: linear-gradient(#080d42, #0f0091);
`

export const Link = styled.a`
  color: #0073DE;
  text-decoration: none;
`

export const Prediction = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  height: 100px;
  align-items: center;
  .predictionCard{
    display: flex;
    align-items: center;
    padding: 20px;
    border: 2px solid #7e96ec;
    background-color: #7e96ec25;
    border-radius: 5px;
    gap: 10px;
    flex-shrink: 0;
  }
  .text{
    flex-shrink: 0;
  }
`
export const flex_center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  display: flex;
  width: 50px;
  height: 50px; 
  align-items: center; 
  justify-content: center; 
  border-radius: 50%;
  background-color: #011D63;
  flex-shrink: 0;
  cursor: pointer;
  position: absolute;
`

const ErrorAnimate = keyframes`
  0%{
    left: -350px;
  }
  100%{
    left: 30px;
  }
`

const EndErrorAnimate = keyframes`
  0%{
    left: 30px;
  }
  100%{
    left: -350px;
  }
`


interface animateProps{
  animate?: boolean
  endAnimate?: boolean
}

export const Error = styled.div<animateProps>`
  background-color: pink;
  color: red;
  width: 300px;
  height: 50px;
  padding: 10px;
  position: absolute;
  bottom: 50px;
  left: -350px;
  box-shadow: 3px 5px 20px #ff000058;
  ${({animate}) => animate
    ? css`animation: ${ErrorAnimate} 0.5s;
      animation-fill-mode: forwards;
    `
    : css`animation: none;`
  }
  ${({endAnimate}) => endAnimate
    ? css`animation: ${EndErrorAnimate} 0.5s;
      animation-fill-mode: forwards;
    `
    : ''
  }
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: space-between;
`