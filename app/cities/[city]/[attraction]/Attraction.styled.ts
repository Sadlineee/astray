import styled from 'styled-components'

export const AttractionBox = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15rem;
  overflow: hidden;

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const AttractionImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: 100%;
`

export const AttractionTitle = styled.span`
  margin: 3rem 0;
  text-align: center;
  font-size: 4.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    font-size: 3.25rem;
  }
`

export const AttractionTextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
  padding: 3rem;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);
`

export const AttractionTextTitle = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    font-size: 2.5rem;
  }
`

export const AttractionTextLine = styled.hr`
  width: 5%;
  margin: 1.5rem 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;

  @media ${({ theme }) => theme.media.small} {
    width: 15%;
  }
`

export const AttractionTextContent = styled.p`
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    font-size: 1.5rem;
  }
`

export const ImageScrollBox = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(30rem * 5);
  animation: scroll 25s linear infinite;

  @keyframes scroll {
    0% { transform: translateX(0) }
    100% { transform: translateX(calc(-30rem * 5)) }
  }

  @media ${({ theme }) => theme.media.small} {
    width: calc(25rem * 5);

    @keyframes scroll {
      0% { transform: translateX(0) }
      100% { transform: translateX(calc(-25rem * 5)) }
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