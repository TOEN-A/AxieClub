'use client'

import Image from 'next/image'
import type { Item, CardsApiResponse } from './source/cards.type'
import type { AxieClass } from './source/class.type'
import type { AxieParts } from './source/parts.type'

const CardsPart = ({
  part,
  cards,
  axieClass,
  url,
}: {
  part: AxieParts
  cards: Item[]
  axieClass: AxieClass
  url: string | undefined
}) => {
  return (
    <>
      <div className="flex ml-40">
        <Image
          src={`${url}/storage/v1/object/public/images/partIcon/${part.part}.png`}
          height={40}
          width={40}
          alt={part.jpPart}
        />
        <p className="text-left ml-2">{part.jpPart}</p>
      </div>
      <div className="h-[0.2rem] ml-28 mr-28 bg-gray-500" />
      <div className="flex flex-wrap gap-8 justify-center my-2 p-4">
        {cards.map((card) =>
          card.partClass === axieClass.class && card.partType === part.part ? (
            <div key={card.id} className="relative">
              {/* <p>{card.id}</p> */}
              <Image
                src={`${url}/storage/v1/object/public/images/regularCards/${card.partClass}/${card.id}.png`}
                height={270}
                width={270}
                alt={card.name}
                // onError={handleImageError}
                style={{ maxWidth: 'none' }}
              />
              <p
                className="absolute left-[105px] bottom-[161px] w-[75%] h-[5%] text-white font-bold text-left text-[16px] "
                style={{ maxWidth: '75%' }}
              >
                {card.name}
              </p>
              <p
                className="absolute left-[48px] bottom-[48px] w-[75%] h-[16%] text-white text-[13px] leading-tight"
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
