'use client'

import Image from 'next/image'

interface JsonData {
  [key: string]: string;
}

const CardSection = ({
  axieClass,
  children,
  url,
}: {
  axieClass: JsonData
  children: React.ReactNode
  url: string | undefined
}) => {
  return (
    <div className="justify-center gap-24 my-8 p-4">
      <div className="flex ml-[5vw]">
        <Image
          src={`${url}/storage/v1/object/public/images/classIcon/${axieClass.class}.png`}
          height={60}
          width={60}
          alt={axieClass.jpClass}
        />
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 text-left">
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
