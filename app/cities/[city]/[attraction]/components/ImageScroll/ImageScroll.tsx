import Image from 'next/image'
import { ImageScrollProps } from '@/types/ImageScrollProps'
import { ImageScrollBox, ImageScrollElement, AttractionImage } from './ImageScroll.styled'

const ImageScroll: React.FC<ImageScrollProps> = ({ images, title }) => {
  return (
    <ImageScrollBox>
      {[...images, ...images].map((el, index) => (
        <ImageScrollElement key={`${title}-${index}`}>
          <AttractionImage>
            <Image 
              src={el} 
              alt={title} 
              fill={true} 
              quality={80}
              priority
            />
          </AttractionImage>
        </ImageScrollElement>
      ))}
    </ImageScrollBox>
  )
}

export default ImageScroll