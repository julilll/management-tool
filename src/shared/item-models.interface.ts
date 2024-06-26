export interface Item {
  id: string,
  name: string,
  description: string,
  color: string,
  _doc: string,
  _dlu?: string,
  _cbu: string
}

export type ViewMode = 'list' | 'grid';
