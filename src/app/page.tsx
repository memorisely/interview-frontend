import { CoursesGrid } from '@/components/CoursesGrid'
import { fetchCourses } from '@/lib/api'

export default async function Home() {
  const coursesData = await fetchCourses()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!coursesData ? (
        <div>
          <h1>Not found! Sorry</h1>
        </div>
      ) : (
        <CoursesGrid coursesData={coursesData} />
      )}
    </main>
  )
}
