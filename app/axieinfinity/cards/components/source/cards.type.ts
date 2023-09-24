export interface Item {
  id: number
  name: string
  description: string
  partClass: string
  partType: string
  partValue: number
  energy: number
  attack: number
  defense: number
  healing: number
  abilityType: string
  stage: number
  tags: string[]
  _etag: string
  isChanged?: boolean
}

export interface CardsApiResponse {
  _etag: string
  _items: Item[]
}