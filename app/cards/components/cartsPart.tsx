'use client'

import Image from 'next/image'
import type { Item } from './source/cards.type'
import type { ObjectData } from './source/objectData.type'
import HighlightAndHover from '@/app/components/highlightAndHover'
import { cardsSubtext } from './source/cardsSubtext'

const CardsPart = ({
  part,
  cards,
  axieClass,
  url,
}: {
  part: ObjectData
  cards: Item[]
  axieClass: ObjectData
  url: string | undefined
}) => {
  return (
    <>
      <div className="flex ml-[6vw]">
        <Image
          src={`${url}/storage/v1/object/public/images/partIcon/${part.part}.png`}
          height={40}
          width={40}
          alt={part.jpPart}
        />
        <p className="text-2xl md:text-3xl lg:text-4xl text-left text-gray-800 ml-2">
          {part.jpPart}
        </p>
      </div>
      <div className="h-1 ml-[6vw] bg-gray-500" />
      <div className="flex flex-wrap gap-3 justify-center my-2 pt-4 pb-0">
        {cards.map((card) =>
          card.partClass === axieClass.class && card.partType === part.part ? (
            <div key={card.id} className="relative">
              {/* <p>{card.id}</p> */}
              <Image
                className="ml-2 object-contain"
                src={`${url}/storage/v1/object/public/images/regularCards/${card.partClass}/${card.id}.png`}
                height={230}
                width={230}
                alt={card.name}
                // onError={handleImageError}
                // style={{ maxWidth: 'none' }}
              />
              <p
                className="absolute left-[95px] bottom-[143px] w-[75%] h-[5%] text-white font-bold text-left text-[13.5px] "
                style={{ maxWidth: '75%' }}
              >
                {card.name}
              </p>
              <div
                className="absolute left-[46px] bottom-[40px] w-[75%] h-[16%] text-white text-[12px] leading-tight font-[370]"
                style={{ maxWidth: '75%' }}
              >
                <HighlightAndHover textWithHighlights={card.description} contentMap={cardsSubtext}/>
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  )
}

export default CardsPart
