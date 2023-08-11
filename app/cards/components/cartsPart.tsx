'use client'

import Image from 'next/image'
import type { Item } from './source/cards.type'

interface JsonData {
  [key: string]: string
}

const CardsPart = ({
  part,
  cards,
  axieClass,
  url,
}: {
  part: JsonData
  cards: Item[]
  axieClass: JsonData
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
        <p className="text-2xl md:text-3xl lg:text-4xl text-left ml-2">
          {part.jpPart}
        </p>
      </div>
      <div className="h-1 ml-[6vw] bg-gray-500" />
      <div className="flex flex-wrap gap-3 justify-center my-2 pt-4 pb-4">
        {cards.map((card) =>
          card.partClass === axieClass.class && card.partType === part.part ? (
            <div key={card.id} className="relative">
              <p>{card.id}</p>
              <Image
                className="ml-2"
                src={`${url}/storage/v1/object/public/images/regularCards/${card.partClass}/${card.id}.png`}
                height={230}
                width={230}
                alt={card.name}
                // onError={handleImageError}
                style={{ maxWidth: 'none' }}
              />
              <p
                className="absolute left-[90px] bottom-[147px] w-[75%] h-[5%] text-white font-bold text-left text-[16px] "
                style={{ maxWidth: '75%' }}
              >
                {card.name}
              </p>
              <p
                className="absolute left-[40px] bottom-[42px] w-[75%] h-[16%] text-white text-[13px] leading-tight"
                style={{ maxWidth: '75%' }}
              >
                {card.description}
              </p>
            </div>
          ) : null
        )}
      </div>
    </>
  )
}

export default CardsPart
