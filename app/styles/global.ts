import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;

    @media ${({ theme }) => theme.media.small} {
      font-size: 10px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
    
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.bg};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 50px;
    }
  }
`