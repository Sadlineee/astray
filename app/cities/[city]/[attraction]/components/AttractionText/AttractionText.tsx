import { AttractionTextProps } from '@/types/AttractionTextProps'
import { AttractionTextBox, AttractionTextTitle, AttractionTextLine, AttractionTextContent } from './AttractionText.styled'

const AttractionText: React.FC<AttractionTextProps> = ({ title, content }) => {
  return (
    <AttractionTextBox>
      <AttractionTextTitle>{title}</AttractionTextTitle>
      <AttractionTextLine />
      <AttractionTextContent>{content}</AttractionTextContent>
    </AttractionTextBox>
  )
}

export default AttractionText