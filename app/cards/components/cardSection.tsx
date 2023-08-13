'use client'

import Image from 'next/image'
import type { ObjectData } from './source/objectData.type'

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
    <div className="justify-center gap-24 my-8 p-4">
      <div className="flex ml-[5vw]">
        <Image
          src={`${url}/storage/v1/object/public/images/classIcon/${axieClass.class}.png`}
          height={45}
          width={45}
          alt={axieClass.jpClass}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 ml-2 text-left">
          {axieClass.jpClass}
        </h2>
      </div>
      <div className="h-1 ml-[5vw] w-[36vw] bg-gray-500" />
      <div className="text-4xl font-bold mb-2 p-4">
        {children}
      </div>
    </div>
  )
}

export default CardSection
