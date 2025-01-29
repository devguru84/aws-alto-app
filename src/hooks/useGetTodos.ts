import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '@/api/todos'

export const useGetTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () => fetchTodos()
  })
}
