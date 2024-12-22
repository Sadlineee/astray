import styled from 'styled-components'
import Link from 'next/link'

export const CitiesBox = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
  padding: 0 15rem;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;
  }
`

export const CityCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  &:hover {
    cursor: auto;
  }
`

export const CityImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: 16rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`

export const CityTitle = styled.span`
  margin-top: 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const CityCountry = styled.span`
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.secondaryLight};
`

export const CityFlag = styled.div`
  position: relative;
  aspect-ratio: 1;
  margin-top: 1.75rem;
  height: 2.5rem;
`

export const CityButton = styled.button`
  margin-top: 3rem;
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondaryLight};
  background: none;
  border: none;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }
`