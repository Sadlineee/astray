import styled from 'styled-components'
import Link from 'next/link'

export const HeaderBox = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15rem;
  height: 5rem;

  @media ${({ theme }) => theme.media.small} {
    padding: 0 1rem;
  }
`

export const AppTitle = styled(Link)`
  text-decoration: none;
  font-size: 2.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
  cursor: default;
`