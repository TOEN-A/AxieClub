import Image from 'next/image'
import { colors } from '../models/colors'
import { supabaseUrl } from '@/app/constants/url'
import { GiAbstract091 } from 'react-icons/gi'
import HighlightAndHover from '@/app/components/highlightAndHover'
import { subtext } from '../../models/subtext'
import { sub } from 'date-fns'

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
        <div className="text-[15px] md:text-[18px] lg:[21px] font-semibold w-full">{name}</div>
        <Image
          src={imageUrl}
          height={80}
          width={80}
          alt={name}
          className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] mt-2"
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
          <p className="text-[13px] md:text-[17px] lg:[19px] mr-2">{axieClass}</p>
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/images/rarityIcon/${rarity}.png`}
            height={40}
            width={40}
            alt={rarity}
            className="w-[20px] mr-1"
          />
          <p className="text-[12px] md:text-[16px] lg:[18px] mr-2">{rarity}</p>
          <GiAbstract091 size={20} className="mr-1"/>
          <p className="text-[12px] md:text-[16px] lg:[18px]">{season}</p>
        </div>
        <div className="text-[12px] md:text-[16px] lg:[18px] mt-2">
          <HighlightAndHover textWithHighlights={description} contentMap={subtext} textColor='text-blue-700'/>
          </div>
      </div>
    </div>
  )
}

export default RuneInfo
