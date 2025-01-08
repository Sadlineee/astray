import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const HomeBox = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  margin: 2rem 0;
  padding: 0 15rem;

  @media ${({ theme }) => theme.media.small} {
    flex-direction: column-reverse;
    padding: 0 1rem;
  }
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;

  @media ${({ theme }) => theme.media.small} {
    align-items: center;
    width: 100%;
    text-align: center;
  }     
`

export const PrimaryText = styled.span`
  font-size: 4.25rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.white};

  @media ${({ theme }) => theme.media.small} {
    font-size: 3rem;
  }
`

export const AnimatedLine = styled.hr`
  margin: 2.5rem 0;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  animation: moving 0.75s linear forwards;
        
  @keyframes moving {
    0% { 
      width: 0% 
    }
    100% { 
      width: 55% 
    }
  }

  @media ${({ theme }) => theme.media.small} {
    margin: 3rem 0;
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }
`

export const SecondaryText = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.white};
`

export const HomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  height: 4rem;
  width: 16rem;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  transition: 0.2s;
            
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.95);
  }

  @media ${({ theme }) => theme.media.small} {
    margin-top: 3rem;
  }
`

export const RightSection = styled.div`
  position: relative;
  aspect-ratio: 1;
  width: 58%;

  @media ${({ theme }) => theme.media.small} {
    width: 68%;
  }
`

export const HomeImage = styled(Image)`
  filter: drop-shadow(-0.6rem -0.6rem 0 ${({ theme }) => theme.colors.primary});

  @media ${({ theme }) => theme.media.small} {
    filter: none;
  }
`