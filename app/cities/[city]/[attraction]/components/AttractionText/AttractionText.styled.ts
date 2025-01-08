import styled from 'styled-components'

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
`

export const AttractionTextLine = styled.hr`
  width: 5%;
  margin: 1.5rem 0;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50px;

  @media ${({ theme }) => theme.media.small} {
    width: 10%;
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