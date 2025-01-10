import styled from 'styled-components'
import Link from 'next/link'
import { PiStarFill } from 'react-icons/pi'

export const CityBox = styled.main`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin: 2rem 0;
  padding: 0 15rem;

  @media ${({ theme }) => theme.media.small} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    padding: 0 1rem;
  }
`

export const AttractionCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-decoration: none;
  box-shadow: -5px 5px 0px rgba(33, 33, 33, 1), -10px 10px 0px rgba(33, 33, 33, 0.7), -15px 15px 0px rgba(33, 33, 33, 0.4), -20px 20px 0px rgba(33, 33, 33, 0.1);

  &:hover {
    cursor: auto;
  }

  @media ${({ theme }) => theme.media.small} {
    padding: 0.1rem;
  }
`

export const AttractionImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  height: 16rem;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background-color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    height: 14rem;
  }
`

export const AttractionTitle = styled.h1`
  margin-top: 1.5rem;
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    margin-top: 1.25rem;
  }
`

export const AttractionLine = styled.hr`
  margin: 1.5rem 0;
  width: 10%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
`

export const AttractionRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`

export const StarIcon = styled(PiStarFill)`
  font-size: 1.25rem;
  color: #F7C923;
`

export const AttractionButton = styled.button`
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

  @media ${({ theme }) => theme.media.small} {
    margin-bottom: 1rem;
  }

  @media ${({ theme }) => theme.media.small} {
    margin: 2rem 0 1rem 0;
  }
`