import { useEffect, useRef } from 'react'
import type { Project } from '../types'

interface VideoModalProps {
  project: Project
  onClose: () => void
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button, video[controls]')
      if (!focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
      previous?.focus()
    }
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={dialogRef} className="video-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div className="modal-topbar">
          <div>
            <p>{project.category}</p>
            <h2 id="modal-title">{project.title}</h2>
          </div>
          <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close video">
            <span />
            <span />
          </button>
        </div>
        <video controls autoPlay playsInline poster={project.poster} aria-label={project.description} tabIndex={0}>
          {project.sources.map((source) => (
            <source key={source.src} src={source.src} type={source.type} />
          ))}
          Your browser does not support HTML video.
        </video>
      </div>
    </div>
  )
}
