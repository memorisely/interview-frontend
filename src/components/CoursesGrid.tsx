import { CoursePreview } from '@/types/models'
import { CourseCard } from './CourseCard'

interface CourseGridProps {
  coursesData: Array<CoursePreview>
}

export function CoursesGrid({ coursesData }: CourseGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4 px-10 py-20">
      {coursesData.map((course) => (
        <CourseCard key={course.title} course={course} />
      ))}
    </div>
  )
}
