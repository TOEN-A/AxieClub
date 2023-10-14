import Image from 'next/image'
import { colors } from '../models/colors'
import { supabaseUrl } from '@/app/constants/url'
import { GiAbstract091 } from 'react-icons/gi'

const RuneInfo = ({
  axieClass,
  name,
  rarity,
  season,
  description,
  imageUrl,
}: {
  axieClass: string
  name: string
  rarity: string
  season: string
  description: string
  imageUrl: string
}) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-wrap justify-center basis-1/5">
        <div className="text-[18px] font-semibold w-full">{name}</div>
        <Image
          src={imageUrl}
          height={80}
          width={80}
          alt={name}
          className="w-[80px] h-[80px] mt-2"
        />
      </div>
      <div className="flex flex-wrap justify-start basis-4/5">
        <div className="flex items-center w-full">
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/images/classIcon/${axieClass}.png`}
            height={40}
            width={40}
            alt={axieClass}
            className="w-[20px] mr-1"
          />
          <p className="mr-2">{axieClass}</p>
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/images/rarityIcon/${rarity}.png`}
            height={40}
            width={40}
            alt={rarity}
            className="w-[20px] mr-1"
          />
          <p className="mr-2">{rarity}</p>
          <GiAbstract091 size={20} className="mr-1"/>
          <p>{season}</p>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  )
}

export default RuneInfo
