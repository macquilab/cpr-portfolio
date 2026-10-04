import canva from '@thesvg/icons/canva'
import premierePro from '@thesvg/icons/premierepro'
import photoshop from '@thesvg/icons/photoshop'
import capCut from '@thesvg/icons/capcut'
import elevenLabs from '@thesvg/icons/elevenlabs'
import pixVerse from '@thesvg/icons/pixverse'
import asana from '@thesvg/icons/asana'
import monday from '@thesvg/icons/monday'
import notion from '@thesvg/icons/notion'
import trello from '@thesvg/icons/trello'
import clickUp from '@thesvg/icons/clickup'
import whatsApp from '@thesvg/icons/whatsapp'
import telegram from '@thesvg/icons/telegram'
import slack from '@thesvg/icons/slack'
import discord from '@thesvg/icons/discord'
import kling from '@thesvg/icons/kling'

const brandSvgs: Record<string, string> = {
  Canva: canva.svg,
  'Premiere Pro': premierePro.svg,
  Photoshop: photoshop.svg,
  CapCut: capCut.svg,
  ElevenLabs: elevenLabs.svg,
  PixVerse: pixVerse.svg,
  Asana: asana.svg,
  'monday.com': monday.svg,
  Notion: notion.svg,
  Trello: trello.svg,
  ClickUp: clickUp.svg,
  WhatsApp: whatsApp.svg,
  Telegram: telegram.svg,
  Slack: slack.svg,
  Discord: discord.svg,
  'Kling AI': kling.svg,
}

function VeoIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><circle cx="32" cy="32" r="30" fill="#4285f4" /><path d="M31 7C19 11 13 20 14 31c1 12 11 20 23 19-9-2-15-9-15-17 0-10 7-18 16-20-2-3-4-5-7-6Z" fill="#fff" /><path d="M53 21c-2 11-10 18-20 18-9 0-17-6-19-15-2 5-2 10 0 15 5 12 18 18 30 13 12-5 17-19 11-30l-2-1Z" fill="#fff" opacity=".96" /></svg>
}

function HiggsfieldIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><circle cx="32" cy="32" r="30" fill="#c6ff00" /><path d="M13 25c7 5 13 4 18-3 5-8 12-9 18-5 7 5 4 13-2 17-7 5-11 10-7 14 4 4 9 1 12-3" fill="none" stroke="#0d0d0c" strokeWidth="8" strokeLinecap="round" /></svg>
}

function KieIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><circle cx="32" cy="32" r="30" fill="#fff" /><path d="m32 12-20 38h40L32 12Zm0 9 11 21H21l11-21Z" fill="none" stroke="#1768d4" strokeWidth="5" strokeLinejoin="round" /><circle cx="32" cy="13" r="4" fill="#1768d4" /><circle cx="12" cy="50" r="4" fill="#1768d4" /><circle cx="52" cy="50" r="4" fill="#1768d4" /><path d="m27 28 8 14" stroke="#1768d4" strokeWidth="4" strokeLinecap="round" /></svg>
}

function HeyGenIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><circle cx="32" cy="32" r="30" fill="#fff" /><path d="M31 10c8 2 14 8 15 15l-14 7-7-14c1-4 3-7 6-8Z" fill="#55a7ff" /><path d="M54 31c-2 8-8 14-15 15l-7-14 14-7c4 1 7 3 8 6Z" fill="#20d9c5" /><path d="M33 54c-8-2-14-8-15-15l14-7 7 14c-1 4-3 7-6 8Z" fill="#98a8ff" /><path d="M10 33c2-8 8-14 15-15l7 14-14 7c-4-1-7-3-8-6Z" fill="#24d193" /></svg>
}

function FalIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><circle cx="32" cy="32" r="30" fill="#f40b4e" /><path d="M21 14h22l3 10 8 7-8 8-3 11H21l-3-11-8-8 8-7 3-10Zm11 12a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z" fill="#fff" /></svg>
}

function FlowIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><rect width="64" height="64" rx="14" fill="#f7f6f2" /><path d="M14 16h30l-8 9H14v-9Zm0 14h19L22 42h-8V30Zm14 9 15-15v24H28v-9Z" fill="#171b20" /></svg>
}

function ArcadsIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><rect width="64" height="64" rx="14" fill="#fff" /><path d="m17 32 15-15 15 15-15 15-15-15Z" fill="#786cff" /><path d="m32 17 15 15 8-8-15-15-8 8Z" fill="#a29cff" /><path d="m32 47 15-15 8 8-15 15-8-8Z" fill="#8d84ed" /><path d="m17 32 15 15-8 8L9 40l8-8Z" fill="#aea8ff" /></svg>
}

function OpenArtIcon() {
  return <svg viewBox="0 0 64 64" role="presentation"><rect width="64" height="64" rx="14" fill="#fff" /><path d="M10 38c0-12 11-18 21-8l5 5 6-6c8-8 16-3 16 5s-8 13-16 5l-5-5-10 10c-8 8-17 3-17-6Z" fill="none" stroke="#0d0d0c" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></svg>
}

function PictoryIcon() {
  return (
    <svg viewBox="0 0 64 64" role="presentation">
      <rect width="64" height="64" rx="14" fill="#10100f" />
      <path fill="#f0eadd" d="M16 12h18.5C46.3 12 53 18.5 53 28.2c0 9.5-6.8 16-18.5 16h-7.7V53H16V12Zm10.8 9.7v12.8h7.1c5.2 0 8.1-2.1 8.1-6.4s-2.9-6.4-8.1-6.4h-7.1Z" />
      <path fill="#e26d43" d="M34.5 12H53v9.7H34.5z" opacity=".85" />
    </svg>
  )
}

function PumbleIcon() {
  return (
    <svg viewBox="0 0 64 64" role="presentation">
      <rect width="64" height="64" rx="15" fill="#7044c5" />
      <rect x="14" y="15" width="36" height="24" rx="12" fill="none" stroke="#fff" strokeWidth="6" />
      <path d="M22 49h20" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
    </svg>
  )
}

interface BrandIconProps {
  name: string
}

export function BrandIcon({ name }: BrandIconProps) {
  if (name === 'Veo 3') return <VeoIcon />
  if (name === 'Higgsfield') return <HiggsfieldIcon />
  if (name === 'Kie.ai') return <KieIcon />
  if (name === 'HeyGen') return <HeyGenIcon />
  if (name === 'Fal.ai') return <FalIcon />
  if (name === 'Flow AI') return <FlowIcon />
  if (name === 'Arcads') return <ArcadsIcon />
  if (name === 'OpenArt') return <OpenArtIcon />
  if (name === 'Pictory') return <PictoryIcon />
  if (name === 'Pumble') return <PumbleIcon />

  const svg = brandSvgs[name]
  if (!svg) return null

  return <span className="brand-svg" dangerouslySetInnerHTML={{ __html: svg }} />
}
