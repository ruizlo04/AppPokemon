export interface  RegionListResponse {
    count: number
    next: string
    previous: any
    results: Region[]
  }
  
  export interface Region {
    name: string
    url: string
  }
  