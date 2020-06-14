declare interface GenericList {
  [key: string]: string
}

declare interface SortList<T> {
  [key: string]: T
}

declare type sortBy = 'best_match' | 'rating' | 'review_count'
