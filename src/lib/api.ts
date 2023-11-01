import { CoursePreview } from '@/types/models'
import axios from 'axios'
const api = axios.create({
  baseURL: 'http://localhost:3001',
})

export async function fetchCourses() {
  try {
    const apiResponse = await api.get('')
    return apiResponse.data as Array<CoursePreview>
  } catch (error) {
    console.error(error)
  }
}
