import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createTodo } from '@/api/todos'

export const useCreateTodo = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (todoValue: string) => createTodo(todoValue),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos']
      })
    },
    onError: (error) => {
      console.error('Error creating a new todo item:', error)
    }
  })
}
