import styled from 'styled-components'

export const AttractionImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.bg};
`

export const ImageScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(30rem * 5);
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    0% { 
      transform: translateX(0) 
    }
    100% { 
      transform: translateX(calc(-30rem * 5)) 
    }
  }

  @media ${({ theme }) => theme.media.small} {
    width: calc(25rem * 5);

    @keyframes scroll {
      0% { 
        transform: translateX(0) 
      }
      100% { 
        transform: translateX(calc(-25rem * 5)) 
      }
    }
  }
`

export const ImageScrollElement = styled.div`
  aspect-ratio: 1;
  height: 30rem;

  @media ${({ theme }) => theme.media.small} {
    height: 25rem;
  }
`