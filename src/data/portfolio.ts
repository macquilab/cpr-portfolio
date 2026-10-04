import type { ContactLink, Project, Service, TimelineStep, Tool } from '../types'

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'process', label: 'Process' },
  { id: 'tools', label: 'Tools' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
]

export const timeline: TimelineStep[] = [
  {
    number: '01',
    title: 'Shape the concept',
    description: 'Start with the audience, offer, and hook—then translate the idea into a clear visual direction.',
  },
  {
    number: '02',
    title: 'Generate the scenes',
    description: 'Develop AI-generated visuals and sequences that support the message, mood, and campaign format.',
  },
  {
    number: '03',
    title: 'Edit for attention',
    description: 'Turn generated material into a focused ad with pacing, sound, captions, motion, and visual resets.',
  },
  {
    number: '04',
    title: 'Refine and deliver',
    description: 'Polish every frame and export platform-ready creative for feeds, stories, reels, and campaigns.',
  },
]

export const tools: Tool[] = [
  { shortName: 'AI', name: 'Generative video', role: 'Concept & scene creation', color: '#e26d43' },
  { shortName: 'Pr', name: 'Premiere Pro', role: 'Edit & story', color: '#8d85ff' },
  { shortName: 'Ae', name: 'After Effects', role: 'Motion & compositing', color: '#9da7ff' },
  { shortName: 'Ps', name: 'Photoshop', role: 'Graphics & cleanup', color: '#52aaff' },
  { shortName: 'Cc', name: 'CapCut', role: 'Social-first edits', color: '#f0eadd' },
  { shortName: 'Ca', name: 'Canva', role: 'Design support', color: '#45d5d0' },
]

export const services: Service[] = [
  {
    number: '01',
    title: 'AI video ads',
    description: 'Concept-led vertical ads built from AI-generated visuals, a clear hook, and platform-native pacing.',
    tags: ['Paid social', 'Reels', 'Shorts'],
  },
  {
    number: '02',
    title: 'AI UGC creative',
    description: 'Creator-style AI ads designed to feel immediate and relatable while keeping the message easy to follow.',
    tags: ['AI UGC', 'Social ads', 'Hooks'],
  },
  {
    number: '03',
    title: 'AI direct response',
    description: 'Persuasion-led creative with rapid visual resets, readable captions, and deliberate message progression.',
    tags: ['VSL', 'Direct response', 'Campaigns'],
  },
  {
    number: '04',
    title: 'AI story ads',
    description: 'Character-led and cinematic generated stories that turn a simple premise into a memorable branded moment.',
    tags: ['Storytelling', 'Characters', 'Concepts'],
  },
  {
    number: '05',
    title: 'Post-production',
    description: 'Human-led editing, sound, captions, color, titles, and motion that turn generated clips into finished ads.',
    tags: ['Editing', 'Sound', 'Motion'],
  },
]

const categoryByIndex = [
  'AI UGC', 'AI UGC', 'AI Story Ad', 'AI Story Ad', 'AI Product Ad',
  'AI Product Ad', 'AI UGC', 'AI Story Ad', 'AI Direct Response', 'AI Direct Response',
]

const ratioByIndex: Project['aspectRatio'][] = Array.from({ length: 10 }, () => 'portrait')

export const projects: Project[] = Array.from({ length: 10 }, (_, index) => {
  const number = index + 1
  const slug = `sample-edit-${number}`
  return {
    id: slug,
    number: String(number).padStart(2, '0'),
    title: `AI ad study ${String(number).padStart(2, '0')}`,
    category: categoryByIndex[index],
    aspectRatio: ratioByIndex[index],
    poster: `/media/optimized/${slug}.jpg`,
    sources: [
      { src: `/media/optimized/${slug}.webm`, type: 'video/webm' },
      { src: `/media/optimized/${slug}.mp4`, type: 'video/mp4' },
    ],
    description: `${categoryByIndex[index]} concept using AI-generated visuals and post-production by Christian Paul Regacho.`,
  }
})

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    placeholder: true,
  },
  {
    label: 'Instagram',
    value: '@yourhandle',
    href: '#contact',
    placeholder: true,
  },
  {
    label: 'LinkedIn',
    value: '/in/your-profile',
    href: '#contact',
    placeholder: true,
  },
]
