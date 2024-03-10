import { Award, Home, Library, SquareStack, Target } from 'lucide-react'
import { NavItem } from './nav-item'

interface MainNavigationProps {
  onClose: () => void
}

export function MainNavigation({ onClose }: MainNavigationProps) {
  return (
    <nav className="space-y-0.5">
      <NavItem title="inicio" icon={Home} path="/" onClose={onClose} />
      <NavItem
        title="Projetos"
        icon={SquareStack}
        path="/projects"
        onClose={onClose}
      />
      <NavItem
        title="Habilidades"
        icon={Library}
        path="/skills"
        onClose={onClose}
      />
      <NavItem
        title="Certificações"
        icon={Award}
        path="/certifications"
        onClose={onClose}
      />
      <NavItem
        title="Experiência"
        icon={Target}
        path="/experiences"
        onClose={onClose}
      />
    </nav>
  )
}
