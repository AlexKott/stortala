declare type Author = {
  id: number
  name: string
  image?: string
}

declare type Message = {
  id: number
  created: number
  parentId: number | null
  authorId: number
  text: string
}

declare type DisplayMessage = {
  id: number
  created: number
  author: Author
  text: string
  replies?: DisplayMessage[]
}
