import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-conteudo">
        <h1 className="logo">🎬 CineCatálogo</h1>
        <nav>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/novo-filme">Novo filme</NavLink>
        </nav>
      </div>
    </header>
  )
}
