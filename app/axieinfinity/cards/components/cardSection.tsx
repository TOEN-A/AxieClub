'use client'

import Image from 'next/image'
import type { ObjectData } from '../../models/objectData.type'
import { FadeInSlideLeft } from '@/app/motion/fadeInSlideLeft'

const CardSection = ({
  axieClass,
  children,
  url,
}: {
  axieClass: ObjectData
  children: React.ReactNode
  url: string | undefined
}) => {
  return (
    <div className="justify-center gap-24 p-4 pb-0">
      <FadeInSlideLeft>
        <div className="mb-[-40px]">
          <div className="flex ml-[1vw]">
            <Image
              src={`${url}/storage/v1/object/public/images/classIcon/${axieClass.class}.png`}
              height={45}
              width={45}
              alt={axieClass.jpClass}
            />
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold mt-4 ml-2 text-left">
              {axieClass.jpClass}
            </h2>
          </div>
          <div className="h-1 ml-[1vw] w-[42vw] bg-gray-500" />
        </div>
      </FadeInSlideLeft>
      <div className="text-4xl font-bold p-4 pb-0">{children}</div>
    </div>
  )
}

export default CardSection
