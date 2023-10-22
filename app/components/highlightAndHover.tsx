'use client'

//----------------------------------------------------------------------------------------------------------------
//ホバー時にテキストボックスが重複するのを防ぐために無理やりステイトを分けて書いたコードなので、いつかどうにかしたい
//各ステイトはひとまず３つ用意している
//----------------------------------------------------------------------------------------------------------------

import React, { useState } from 'react'
import Image from 'next/image'

interface ContentMap {
  [key: string]: {
    text: string[]
    images?: string[]
    processed?: number
  }
}

const HighlightAndHover: React.FC<{
  textWithHighlights: string
  contentMap: ContentMap
  textColor?: string
  textAlignment?: string
}> = ({ textWithHighlights, contentMap, textColor, textAlignment }) => {
  const [hoveredContent, setHoveredContent] = useState<string>('')
  const [hoveredContent2, setHoveredContent2] = useState<string>('')
  const [hoveredContent3, setHoveredContent3] = useState<string>('')

  const [hoveredPosition, setHoveredPosition] = useState<{
    top: number
    left: number
  } | null>(null)
  const [hoveredPosition2, setHoveredPosition2] = useState<{
    top: number
    left: number
  } | null>(null)
  const [hoveredPosition3, setHoveredPosition3] = useState<{
    top: number
    left: number
  } | null>(null)

  const [hoveredImages, setHoveredImages] = useState<string[]>([])
  const [hoveredImages2, setHoveredImages2] = useState<string[]>([])
  const [hoveredImages3, setHoveredImages3] = useState<string[]>([])

  let updatedContentMap = { ...contentMap }

  const handleHover = (
    content: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    setHoveredContent(content)
    setHoveredPosition({ top: event.clientY, left: event.clientX })
    setHoveredImages(contentMap[content]?.images || [])
  }
  const handleHover2 = (
    content: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    setHoveredContent2(content)
    setHoveredPosition2({ top: event.clientY, left: event.clientX })
    setHoveredImages2(contentMap[content]?.images || [])
  }
  const handleHover3 = (
    content: string,
    event: React.MouseEvent<HTMLSpanElement>
  ) => {
    setHoveredContent3(content)
    setHoveredPosition3({ top: event.clientY, left: event.clientX })
    setHoveredImages3(contentMap[content]?.images || [])
  }

  const handleHoverEnd = () => {
    setHoveredContent('')
    setHoveredPosition(null)
    setHoveredImages([])
  }
  const handleHoverEnd2 = () => {
    setHoveredContent2('')
    setHoveredPosition2(null)
    setHoveredImages2([])
  }
  const handleHoverEnd3 = () => {
    setHoveredContent3('')
    setHoveredPosition3(null)
    setHoveredImages3([])
  }

  const HoverContent: React.FC<{ content: string }> = ({ content }) => {
    const isHovered = content === hoveredContent
    return (
      <>
        {isHovered && hoveredPosition && (
          <div className="absolute bg-black bg-opacity-0 text-white p-1 top-4 left-[-115px] z-10 w-[160px] md:w-[200px] text-left">
            {contentMap[content]?.text.map((contentText, idx) => (
              <div key={idx} className="bg-black bg-opacity-90 p-1 mb-1">
                {contentText}
              </div>
            ))}
            <div className="flex justify-center flex-wrap">
              {hoveredImages.map((imageUrl, idx) => (
                <Image
                  key={idx}
                  src={imageUrl}
                  alt={`Hovered Image ${idx}`}
                  height={170}
                  width={170}
                />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
  const HoverContent2: React.FC<{ content: string }> = ({ content }) => {
    const isHovered = content === hoveredContent2
    return (
      <>
        {isHovered && hoveredPosition2 && (
          <div className="absolute bg-black bg-opacity-0 text-white p-1 top-4 left-[-115px] z-10 w-[160px] md:w-[200px] text-left">
            {contentMap[content]?.text.map((contentText, idx) => (
              <div key={idx} className="bg-black bg-opacity-90 p-1 mb-1">
                {contentText}
              </div>
            ))}
            <div className="flex justify-center flex-wrap">
              {hoveredImages2.map((imageUrl, idx) => (
                <Image
                  key={idx}
                  src={imageUrl}
                  alt={`Hovered Image ${idx}`}
                  height={170}
                  width={170}
                />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
  const HoverContent3: React.FC<{ content: string }> = ({ content }) => {
    const isHovered = content === hoveredContent3
    return (
      <>
        {isHovered && hoveredPosition3 && (
          <div className="absolute bg-black bg-opacity-0 text-white p-1 top-4 left-[-115px] z-10 w-[160px] md:w-[200px] text-left">
            {contentMap[content]?.text.map((contentText, idx) => (
              <div key={idx} className="bg-black bg-opacity-90 p-1 mb-1">
                {contentText}
              </div>
            ))}
            <div className="flex justify-center flex-wrap">
              {hoveredImages3.map((imageUrl, idx) => (
                <Image
                  key={idx}
                  src={imageUrl}
                  alt={`Hovered Image ${idx}`}
                  height={170}
                  width={170}
                />
              ))}
            </div>
          </div>
        )}
      </>
    )
  }

  const parsedText = textWithHighlights
    .split(/(<[^>]+>|{[^}]+}|\[[^\]]+\])/) // Add condition for [] brackets
    .map((part, index) => {
      if (
        (part.startsWith('<') && part.endsWith('>')) ||
        (part.startsWith('{') && part.endsWith('}')) ||
        (part.startsWith('[') && part.endsWith(']')) // Check for []
      ) {
        const content = part.slice(1, -1)

        if (updatedContentMap[content]?.processed === undefined) {
          updatedContentMap = {
            ...updatedContentMap,
            [content]: { ...updatedContentMap[content], processed: 2 },
          }
          return (
            <span
              key={index}
              className={`relative inline-block ${
                textColor ? textColor : 'text-yellow-200'
              }`}
              onMouseEnter={(e) => handleHover(content, e)}
              onMouseLeave={handleHoverEnd}
            >
              {content}
              <HoverContent content={content} />
            </span>
          )
        } else if (updatedContentMap[content]?.processed === 2) {
          // Mark the content as processed
          updatedContentMap = {
            ...updatedContentMap,
            [content]: { ...updatedContentMap[content], processed: 3 },
          }

          return (
            <span
              key={index}
              className={`relative inline-block ${
                textColor ? textColor : 'text-yellow-200'
              }`}
              onMouseEnter={(e) => handleHover2(content, e)}
              onMouseLeave={handleHoverEnd2}
            >
              {content}
              <HoverContent2 content={content} />
            </span>
          )
        } else if (updatedContentMap[content]?.processed === 3) {
          // Mark the content as processed
          updatedContentMap = {
            ...updatedContentMap,
            [content]: { ...updatedContentMap[content], processed: 4 },
          }

          return (
            <span
              key={index}
              className={`relative inline-block ${
                textColor ? textColor : 'text-yellow-200'
              }`}
              onMouseEnter={(e) => handleHover3(content, e)}
              onMouseLeave={handleHoverEnd3}
            >
              {content}
              <HoverContent3 content={content} />
            </span>
          )
        } else {
          return (
            <span
              key={index}
              className={`relative inline-block ${
                textColor ? textColor : 'text-yellow-200'
              }`}
            >
              {content}
            </span>
          )
        }
      } else {
        return <span key={index}>{part}</span>
      }
    })

  return (
    <div className={`relative  text-${textAlignment ? textAlignment : "center"}`}>
      <div>{parsedText}</div>
    </div>
  )
}

export default HighlightAndHover
