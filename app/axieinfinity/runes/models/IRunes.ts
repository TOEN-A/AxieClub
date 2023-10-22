export interface Item {
  id: string
  displayOrder: number
  category: string
  rarity: string
  description: string
  name: string
  maxCopies: number
  tokenStandard: string
  tokenAddress: string
  tokenId: string
  imageUrl: string
}

export interface Season {
  id: number
  name: string
}

export interface Rune {
  rune: string
  class: string
  craftable: boolean
  weight: number
  hp: number
  hpPct: number
  item: Item
  season: Season
  _etag: string
}

export interface RunesApiResponse {
  _etag: string
  _items: Rune[]
}
