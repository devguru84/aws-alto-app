export interface TodoItem {
  id: number
  todo: string
}

export interface GetTodosResponse {
  todos: TodoItem[]
}
