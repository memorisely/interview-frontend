import { CoursePreview } from '@/types/models'
import Image from 'next/image'

interface CardProps {
  course: CoursePreview
}

export function CourseCard({ course }: CardProps) {
  const extractDifficultyValues = Object.values(course.difficulty)
  return (
    <div className="flex flex-col gap-3">
      <Image
        src={course.thumbnail}
        alt="Course Image"
        height={200}
        width={200}
        priority
        quality={100}
        className="rounded-md"
      />
      <p className="flex items-center gap-3">
        <span>{course.language}</span>
        <span> {course.difficulty}</span>
        <span>{course.length}</span>
      </p>
      <h1 className="font-bold">{course.title}</h1>
      <h4>{course.tutor.name}</h4>
    </div>
  )
}
