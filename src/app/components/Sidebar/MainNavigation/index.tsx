import { Award, Home, Library, SquareStack, Target } from 'lucide-react'
import { NavItem } from './nav-item'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="inicio" icon={Home} path="/" />
      <NavItem title="Projetos" icon={SquareStack} path="/projects" />
      <NavItem title="Habilidades" icon={Library} path="/skills" />
      <NavItem title="Certificações" icon={Award} path="/certifications" />
      <NavItem title="Experiência" icon={Target} path="/experiences" />
    </nav>
  )
}
