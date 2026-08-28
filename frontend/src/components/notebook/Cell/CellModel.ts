export type CellType = 'code' | 'markdown'

export interface Cell {
  id: string
  type: CellType
  source: string
}