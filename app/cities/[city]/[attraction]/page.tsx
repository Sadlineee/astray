'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import { NotFound } from '@/components'
import { BritishMuseumData, BuckinghamPalaceData, EiffelTowerData, HarrodsData, HydeParkData, LondonEyeData, NationalGalleryData, PalaceOfWestminsterData, SkyGardenData, StatueOfLibertyData, TheShardData, TowerBridgeData, TowerOfLondonData, WestminsterAbbeyData } from '@data/cities'
import { AttractionBox, AttractionImage, AttractionTextBox, AttractionTextContent, AttractionTextLine, AttractionTextTitle, AttractionTitle, ImageScrollBox, ImageScrollElement } from './Attraction.styled'


const attractionDataMap: Record<string, typeof TowerBridgeData> = {
  TowerBridge: TowerBridgeData,
  BuckinghamPalace: BuckinghamPalaceData,
  BritishMuseum: BritishMuseumData, 
  PalaceOfWestminster: PalaceOfWestminsterData,
  TowerOfLondon: TowerOfLondonData,
  HydePark: HydeParkData,
  LondonEye: LondonEyeData,
  NationalGallery: NationalGalleryData,
  Harrods: HarrodsData,
  SkyGarden: SkyGardenData, 
  TheShard: TheShardData, 
  WestminsterAbbey: WestminsterAbbeyData,

  EiffelTower: EiffelTowerData,

  StatueOfLiberty: StatueOfLibertyData
}

export default function Attraction() {
  const { attraction } = useParams()

  if (typeof attraction !== 'string') {
    return <NotFound>404</NotFound>
  }

  const attractionData = attractionDataMap[attraction]

  if (!attractionData) {
    return <NotFound>404</NotFound>
  }

  return (
    <div>
      {attractionData.map((el) => (
        <AttractionBox key={el.id}>
          <ImageScrollBox key={el.id}> 
            {[...el.image, ...el.image ].map((img, index) => ( 
              <ImageScrollElement key={`${el.id}-${index}`}> 
                <AttractionImage>
                  <Image src={img} alt={`${el.title}`} fill={true} quality={70} />
                </AttractionImage> 
              </ImageScrollElement> 
            ))} 
          </ImageScrollBox>
          <AttractionTitle>{el.title}</AttractionTitle> 
          <AttractionTextBox>
            <AttractionTextTitle>История</AttractionTextTitle> 
            <AttractionTextLine /> 
            <AttractionTextContent>{el.history}</AttractionTextContent> 
          </AttractionTextBox>
          <AttractionTextBox>
            <AttractionTextTitle>Архитектура</AttractionTextTitle> 
            <AttractionTextLine /> 
            <AttractionTextContent>{el.architecture}</AttractionTextContent> 
          </AttractionTextBox>   
        </AttractionBox>
      ))}
    </div>
  )
}