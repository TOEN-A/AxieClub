'use client'

import Image from 'next/image'
import type { AxieClass } from './source/class.type'

const CardSection = ({
  axieClass,
  children,
  url,
}: {
  axieClass: AxieClass
  children: React.ReactNode
  url: string | undefined
}) => {
  return (
    <div className="justify-center gap-24 my-8 p-4">
      <div className="flex ml-32">
        <Image
          src={`${url}/storage/v1/object/public/images/classIcon/${axieClass.class}.png`}
          height={60}
          width={60}
          alt={axieClass.jpClass}
        />
        <h2 className="text-4xl font-bold mt-2 text-left">
          {axieClass.jpClass}
        </h2>
      </div>
      <div className="h-1 ml-28 w-56 bg-gray-500" />
      <div className="text-4xl font-bold mb-2 p-4">
        {children}
      </div>
    </div>
  )
}

export default CardSection
