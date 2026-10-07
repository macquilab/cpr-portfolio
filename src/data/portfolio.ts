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
  { shortName: 'V3', name: 'Veo 3', role: 'AI video generation', color: '#4285f4', category: 'ai' },
  { shortName: 'Hg', name: 'Higgsfield', role: 'Cinematic AI video', color: '#c6ff00', category: 'ai' },
  { shortName: 'Kie', name: 'Kie.ai', role: 'AI generation platform', color: '#1976d2', category: 'ai' },
  { shortName: 'Kl', name: 'Kling AI', role: 'AI video generation', color: '#f0eadd', category: 'ai' },
  { shortName: 'Hg', name: 'HeyGen', role: 'AI avatars & video', color: '#20d9c5', category: 'ai' },
  { shortName: 'Fal', name: 'Fal.ai', role: 'Generative media models', color: '#f40b4e', category: 'ai' },
  { shortName: 'Fl', name: 'Flow AI', role: 'AI creative workflows', color: '#f0eadd', category: 'ai' },
  { shortName: 'Ar', name: 'Arcads', role: 'AI ad creation', color: '#8e84ff', category: 'ai' },
  { shortName: 'OA', name: 'OpenArt', role: 'AI image creation', color: '#f0eadd', category: 'ai' },
  { shortName: 'Ca', name: 'Canva', role: 'Design & layouts', color: '#45d5d0', category: 'editing' },
  { shortName: 'Pr', name: 'Premiere Pro', role: 'Editing & storytelling', color: '#8d85ff', category: 'editing' },
  { shortName: 'Ps', name: 'Photoshop', role: 'Graphics & cleanup', color: '#52aaff', category: 'editing' },
  { shortName: 'Cc', name: 'CapCut', role: 'Social-first edits', color: '#f0eadd', category: 'editing' },
  { shortName: 'Pi', name: 'Pictory', role: 'AI video creation', color: '#f0eadd', category: 'editing' },
  { shortName: '11', name: 'ElevenLabs', role: 'AI voice & audio', color: '#d8d5ce', category: 'editing' },
  { shortName: 'Px', name: 'PixVerse', role: 'AI video generation', color: '#986cff', category: 'editing' },
  { shortName: 'As', name: 'Asana', role: 'Project planning', color: '#ff7262', category: 'management' },
  { shortName: 'M', name: 'monday.com', role: 'Workflow management', color: '#ffd329', category: 'management' },
  { shortName: 'N', name: 'Notion', role: 'Docs & organization', color: '#f0eadd', category: 'management' },
  { shortName: 'Tr', name: 'Trello', role: 'Task tracking', color: '#0c88c7', category: 'management' },
  { shortName: 'Cu', name: 'ClickUp', role: 'Projects & tasks', color: '#ff4f9a', category: 'management' },
  { shortName: 'Wa', name: 'WhatsApp', role: 'Client messaging', color: '#25d366', category: 'communication' },
  { shortName: 'Tg', name: 'Telegram', role: 'Fast communication', color: '#2aabee', category: 'communication' },
  { shortName: 'Sl', name: 'Slack', role: 'Team communication', color: '#e01e5a', category: 'communication' },
  { shortName: 'Pu', name: 'Pumble', role: 'Team messaging', color: '#7c45c8', category: 'communication' },
  { shortName: 'Dc', name: 'Discord', role: 'Community chat', color: '#5865f2', category: 'communication' },
]

export const toolCategories = [
  { id: 'ai' as const, label: 'AI tools utilized' },
  { id: 'editing' as const, label: 'Editing software' },
  { id: 'management' as const, label: 'Managing tools' },
  { id: 'communication' as const, label: 'Communication' },
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
  'AI UGC', 'AI UGC', 'AI Direct Response', 'AI Direct Response', 'AI Product Ad',
  'AI Product Ad', 'AI UGC', 'AI UGC',
]

const ratioByIndex: Project['aspectRatio'][] = Array.from({ length: 18 }, () => 'portrait')

export const projects: Project[] = Array.from({ length: 18 }, (_, index) => {
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
      ...(number <= 11 ? [{ src: `/media/optimized/${slug}.webm`, type: 'video/webm' as const }] : []),
      { src: `/media/optimized/${slug}.mp4`, type: 'video/mp4' as const },
    ],
    description: `${categoryByIndex[index]} concept using AI-generated visuals and post-production by Christian Paul Regacho.`,
  }
})

export const contactLinks: ContactLink[] = [
  {
    label: 'Email',
    value: 'christianpaulregacho@gmail.com',
    href: 'mailto:christianpaulregacho@gmail.com',
    placeholder: false,
  },
  {
    label: 'WhatsApp',
    value: '+639451753568',
    href: 'https://wa.me/639451753568',
    placeholder: false,
  },
]
