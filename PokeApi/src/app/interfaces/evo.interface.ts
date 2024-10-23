export interface EvolutionListResponse {
    count: number
    next: string
    previous: any
    results: Evolution[]
}

export interface Evolution {
    url: string
}