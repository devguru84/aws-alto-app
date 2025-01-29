import axios from 'axios'
import { getAuthToken } from './auth'
import { GetTodosResponse } from '@/types/todo'

const API_BASE_URL = 'https://6oa5hz3pnd.execute-api.us-east-2.amazonaws.com/v0'

export const fetchTodos = async () => {
  try {
    const token = await getAuthToken()
    const response = await axios.get<GetTodosResponse>(
      `${API_BASE_URL}/todos`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const { todos } = response.data
    return todos
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || 'Failed to fetch applications from the API.'
      )
    } else {
      throw new Error('Unknown Error')
    }
  }
}

export const createTodo = async (value: string) => {
  try {
    const token = await getAuthToken()
    const response = await axios.post(
      `${API_BASE_URL}/todos`,
      {
        value
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data || 'Failed to create a new todo item from the API.'
      )
    } else {
      throw new Error('Unknown Error')
    }
  }
}
