export interface CoursePreview {
  tutor: Tutor
  softwareTool: SoftwareTool
  keyword: string
  title: string
  thumbnail: string
  difficulty: Difficulty
  language: Language
  length: number
  publishedAt: string
}

export enum Difficulty {
  EASY = 'Easy',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export enum Language {
  ENGLISH = 'English',
}

export interface Tutor {
  name: string
}

export interface SoftwareTool {
  icon: string
  title: string
}
