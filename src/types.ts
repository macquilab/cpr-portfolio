export type AspectRatio = 'portrait' | 'landscape' | 'square'

export interface MediaSource {
  src: string
  type: 'video/mp4' | 'video/webm'
}

export interface Project {
  id: string
  number: string
  title: string
  category: string
  aspectRatio: AspectRatio
  poster: string
  sources: MediaSource[]
  description: string
}

export interface Service {
  number: string
  title: string
  description: string
  tags: string[]
}

export interface Tool {
  shortName: string
  name: string
  role: string
  color: string
  category: 'ai' | 'editing' | 'management' | 'communication'
}

export interface TimelineStep {
  number: string
  title: string
  description: string
}

export interface ContactLink {
  label: string
  value: string
  href: string
  placeholder: boolean
}
