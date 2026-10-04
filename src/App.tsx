import { useCallback, useEffect, useMemo, useState } from 'react'
import { contactLinks, projects, services, timeline, toolCategories, tools } from './data/portfolio'
import type { Project } from './types'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { SectionHeading } from './components/SectionHeading'
import { VideoCard } from './components/VideoCard'
import { VideoModal } from './components/VideoModal'
import { BrandIcon } from './components/BrandIcon'

const sectionIds = ['about', 'process', 'tools', 'services', 'work', 'contact']

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveSection(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.05, 0.3, 0.6] },
    )
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    )
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
    return () => revealObserver.disconnect()
  }, [filter])

  const categories = useMemo(() => ['All', ...Array.from(new Set(projects.map((project) => project.category)))], [])
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)
  const closeModal = useCallback(() => setSelectedProject(null), [])

  return (
    <div id="top" className="site-shell">
      <Header activeSection={activeSection} />

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />
          <div className="hero-kicker">
            <span /> Available for creative projects
          </div>
          <div className="hero-title-wrap">
            <p className="hero-overline">Christian Paul Regacho</p>
            <h1 id="hero-title">
              AI ads built
              <span>to stop the scroll.</span>
            </h1>
          </div>
          <div className="hero-bottom">
            <p>
              AI Ads Specialist combining generative visuals, ad thinking, and sharp post-production to turn ideas into campaign-ready creative.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Watch my work <span aria-hidden="true">↘</span></a>
              <a className="button button-ghost" href="#contact">Start a project</a>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <Logo labelled={false} />
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About">
            <span>Scroll</span><i aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="section about" aria-labelledby="about-title">
          <div className="about-number" aria-hidden="true">01</div>
          <div className="about-copy reveal">
            <p className="eyebrow">About / AI ads specialist</p>
            <h2 id="about-title">AI makes the scenes. Strategy makes the ad.</h2>
            <div className="about-columns">
              <p className="lead">I’m Christian, an AI Ads Specialist focused on turning bold concepts into clear, watchable campaign creative.</p>
              <div>
                <p>I combine AI-generated visuals with human direction and hands-on editing—shaping every hook, scene, sound, and transition around the message.</p>
                <p className="faith-note"><span>Values</span> Create with purpose. Use AI thoughtfully. Keep the idea human.</p>
              </div>
            </div>
          </div>
          <div className="about-poster reveal" aria-label="Abstract AI advertising workflow illustration">
            <div className="film-frame frame-a"><span>IN</span></div>
            <div className="film-frame frame-b"><span>OUT</span></div>
            <div className="timeline-strip">
              {Array.from({ length: 9 }, (_, index) => <i key={index} />)}
            </div>
            <div className="poster-label">Prompt / generate / refine</div>
          </div>
        </section>

        <section id="process" className="section process" aria-labelledby="process-title">
          <SectionHeading eyebrow="02 / Process" title="From first prompt to finished campaign." body="An AI-native workflow with human creative direction at every step." />
          <div className="timeline">
            {timeline.map((step) => (
              <article className="timeline-step reveal" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="section tools-section" aria-labelledby="tools-title">
          <SectionHeading eyebrow="03 / Toolkit" title="The tools behind every finished ad." />
          <div className="tool-groups">
            {toolCategories.map((category) => (
              <section className="tool-group reveal" key={category.id} aria-labelledby={`tools-${category.id}`}>
                <div className="tool-group-heading">
                  <h3 id={`tools-${category.id}`}>{category.label}</h3>
                  <span>{String(tools.filter((tool) => tool.category === category.id).length).padStart(2, '0')}</span>
                </div>
                <div className="tool-grid">
                  {tools.filter((tool) => tool.category === category.id).map((tool) => (
                    <article className="tool-card" key={tool.name} style={{ '--tool-color': tool.color } as React.CSSProperties}>
                      <span className="tool-icon" aria-hidden="true"><BrandIcon name={tool.name} /></span>
                      <div><h4>{tool.name}</h4><p>{tool.role}</p></div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <p className="tool-note reveal">AI accelerates the canvas. Human judgment shapes the ad.</p>
        </section>

        <section id="services" className="section services" aria-labelledby="services-title">
          <SectionHeading eyebrow="04 / Services" title="AI creative shaped around the way people buy." />
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row reveal" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section work" aria-labelledby="work-title">
          <SectionHeading eyebrow="05 / Selected work" title="Ten AI ads. Ten different worlds." body="AI-generated concepts transformed through editing, sound, pacing, and post-production." />
          <div className="filters" aria-label="Filter projects">
            {categories.map((category) => (
              <button key={category} type="button" className={filter === category ? 'active' : ''} onClick={() => setFilter(category)} aria-pressed={filter === category}>
                {category}
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => <VideoCard key={project.id} project={project} onSelect={setSelectedProject} />)}
          </div>
        </section>

        <section id="contact" className="section contact" aria-labelledby="contact-title">
          <div className="contact-orbit" aria-hidden="true" />
          <p className="eyebrow reveal">06 / Contact</p>
          <h2 id="contact-title" className="reveal">Have an idea?<br /><span>Let’s turn it into an ad.</span></h2>
          <p className="contact-intro reveal">Share the product, audience, platform, and feeling you want to create. We’ll build the world around it.</p>
          <div className="contact-links reveal">
            {contactLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span>{link.label}{link.placeholder && <small>Placeholder</small>}</span>
                <strong>{link.value}</strong>
                <i aria-hidden="true">↗</i>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <Logo labelled={false} />
        <p>Christian Paul Regacho<br /><span>AI Ads Specialist</span></p>
        <p className="footer-note">Built frame by frame. © {new Date().getFullYear()}</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      {selectedProject && <VideoModal project={selectedProject} onClose={closeModal} />}
    </div>
  )
}

export default App
