import Image from 'next/image'
import { colors } from '../models/colors'
import { supabaseUrl } from '@/app/constants/url'
import { GiAbstract091 } from 'react-icons/gi'
import HighlightAndHover from '@/app/components/highlightAndHover'
import { subtext } from '../../models/subtext'
import { axieClassJP } from '../models/axieClasses'
import { rarityJP } from '../models/rarity'

const RuneInfo = ({
  axieClass,
  name,
  rarity,
  season,
  description,
  imageUrl,
  isChecked,
}: {
  axieClass: string
  name: string
  rarity: string
  season: string
  description: string
  imageUrl: string
  isChecked: boolean
}) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-wrap justify-center basis-1/5">
        <div className="text-[11px] md:text-[13px] lg:text-[16px] text-black font-semibold w-full">
          {name}
        </div>
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
            className="w-[20px] mr-[2px]"
          />
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black mr-2">
            {isChecked ? axieClass : axieClassJP[axieClass]}
          </p>
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/images/rarityIcon/${rarity}.png`}
            height={40}
            width={40}
            alt={rarity}
            className="w-[20px] mr-[2px]"
          />
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black mr-2">
            {isChecked ? rarity : rarityJP[rarity]}
          </p>
          <GiAbstract091 size={20} className="mr-[2px]" color='black' />
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black">
            {isChecked ? season : season.replace('Season ', 'シーズン')}
          </p>
        </div>
        <div className="text-[10px] md:text-[12px] lg:text-[15px] text-black mt-2 mr-2">
          <HighlightAndHover
            textWithHighlights={description}
            contentMap={subtext}
            textColor="text-blue-700"
            textAlignment='left'
          />
        </div>
      </div>
    </div>
  )
}

export default RuneInfo
