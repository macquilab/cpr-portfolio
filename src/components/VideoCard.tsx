import type { Project } from '../types'

interface VideoCardProps {
  project: Project
  onSelect: (project: Project) => void
}

export function VideoCard({ project, onSelect }: VideoCardProps) {
  return (
    <article className={`project-card project-${project.aspectRatio} reveal`}>
      <button type="button" onClick={() => onSelect(project)} aria-label={`Play ${project.title}`}>
        <div className="project-media">
          <img src={project.poster} alt="" loading="lazy" />
          <span className="play-button" aria-hidden="true">
            <i />
          </span>
          <span className="project-index">{project.number}</span>
        </div>
        <div className="project-meta">
          <div>
            <p>{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <span aria-hidden="true">↗</span>
        </div>
      </button>
    </article>
  )
}
