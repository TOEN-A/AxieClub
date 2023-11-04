import Image from 'next/image'
import { supabaseUrl } from '@/app/constants/url'
import { GiAbstract091 } from 'react-icons/gi'
import { RiMedal2Fill } from 'react-icons/ri'
import { PiMedalFill } from 'react-icons/pi'
import HighlightAndHover from '@/app/components/highlightAndHover'
import { subtext } from '../models/subtext'
import { axieClassJP } from '../../runes/models/axieClasses'
import { rarityJP } from '../models/rarity'

const Infomation = ({
  axieClass,
  name,
  rarity,
  season,
  potentialPoint,
  imageSize,
  description,
  imageUrl,
  isChecked,
}: {
  axieClass: string
  name: string
  rarity: string
  season: string
  potentialPoint?: number
  description: string
  imageUrl: string
  imageSize?: 'small' | 'medium' | 'large'
  isChecked: boolean
}) => {
  return (
    <div className="flex flex-row gap-2 w-full">
      <div className="flex flex-wrap justify-center basis-1/5">
        <div className="flex justify-center items-center text-[11px] md:text-[13px] lg:text-[16px] text-black font-semibold w-full">
          {name}
        </div>
        <Image
          src={imageUrl}
          height={80}
          width={80}
          alt={name}
          className={
            imageSize === 'small'
              ? `w-[auto] h-[30px] md:h-[40px] lg:h-[60px] mt-2`
              : `w-[auto] h-[50px] md:h-[60px] lg:h-[80px] mt-2`
          }
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
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black mr-1">
            {isChecked ? axieClass : axieClassJP[axieClass]}
          </p>
          <Image
            src={`${supabaseUrl}/storage/v1/object/public/images/rarityIcon/${rarity}.png`}
            height={40}
            width={40}
            alt={rarity}
            className="w-[20px] mr-[2px]"
          />
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black mr-1">
            {isChecked ? rarity : rarityJP[rarity]}
          </p>
          <GiAbstract091 size={20} className="mr-[2px]" color="black" />
          <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black">
            {isChecked ? season : season.replace('Season ', 'シーズン')}
          </p>
        </div>
        {potentialPoint && (
          <div className="flex justify-start items-start w-full mt-[1px]">
            <PiMedalFill size={16} className="md:mt-[3px] mr-[2px]" color="black" />
            {isChecked ? (
              <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black">
                potentialPoint: {potentialPoint}
              </p>
            ) : (
              <p className="text-[10px] md:text-[12px] lg:text-[15px] text-black">
                ポテンシャルポイント: {potentialPoint}
              </p>
            )}
          </div>
        )}
        <div className="text-[11px] md:text-[12px] lg:text-[15px] text-black mt-1 mr-1">
          <HighlightAndHover
            textWithHighlights={description}
            contentMap={subtext}
            textColor="text-blue-700"
            textAlignment="left"
          />
        </div>
      </div>
    </div>
  )
}

export default Infomation
