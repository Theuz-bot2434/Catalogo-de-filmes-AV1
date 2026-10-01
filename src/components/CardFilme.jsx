import { Link } from 'react-router-dom'
import ImagemFilme from './ImagemFilme.jsx'

export default function CardFilme({ filme, onFavoritar, onExcluir }) {
  function confirmarExclusao() {
    if (window.confirm(`Excluir "${filme.titulo}"?`)) {
      onExcluir(filme.id)
    }
  }

  return (
    <article className="card">
      <Link to={`/filme/${filme.id}`}>
        <ImagemFilme src={filme.imagemUrl} alt={`Pôster de ${filme.titulo}`} className="card-img" />
      </Link>
      <div className="card-corpo">
        <h3>{filme.titulo}</h3>
        <p className="card-info">
          {filme.categoria} • ⭐ {filme.nota}
        </p>
        <div className="card-botoes">
          <button
            className={filme.favorito ? 'btn btn-fav ativo' : 'btn btn-fav'}
            onClick={() => onFavoritar(filme.id)}
          >
            {filme.favorito ? '★ Favorito' : '☆ Favoritar'}
          </button>
          <button className="btn btn-perigo" onClick={confirmarExclusao}>
            Excluir
          </button>
        </div>
        <Link to={`/filme/${filme.id}`} className="link-detalhes">
          Ver detalhes →
        </Link>
      </div>
    </article>
  )
}
