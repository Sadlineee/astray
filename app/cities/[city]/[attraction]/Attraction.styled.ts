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

export const AttractionTitle = styled.h2`
  margin: 3rem 0;
  text-align: center;
  font-size: 4.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    font-size: 3rem;
  }
`