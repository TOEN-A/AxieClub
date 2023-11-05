// シーズン情報の型定義
export interface Season {
  id: number
  name: string
}

// アイテム情報の型定義
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

// カードの型定義
export interface Charm {
  class: string
  potentialPoint: number
  code: string
  craftable: boolean
  weight: number
  tags: string[]
  energy: number
  hp: number
  damage: number
  shield: number
  heal: number
  hpPct: number
  damagePct: number
  shieldPct: number
  healPct: number
  item: Item
  season: Season
  _etag: string
}

// データ全体の型定義
export interface CharmsApiResponse {
  _etag: string
  _items: Charm[]
}
