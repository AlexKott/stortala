/*** MODELS ***/

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

/*** REQUESTS ***/

declare type RequestEntity = 'authors' | 'messages'
declare type RequestMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'
declare type RequestConfig = {
  headers: {
    [key: string]: string
  }
  method: RequestMethod
  body?: string
}
