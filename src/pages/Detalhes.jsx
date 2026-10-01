import { useParams, Link, useNavigate } from 'react-router-dom'
import ImagemFilme from '../components/ImagemFilme.jsx'

export default function Detalhes({ filmes, onFavoritar, onExcluir }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const filme = filmes.find((f) => String(f.id) === id)

  if (!filme) {
    return (
      <div>
        <p className="mensagem">Filme não encontrado.</p>
        <Link to="/" className="btn">Voltar ao início</Link>
      </div>
    )
  }

  function excluir() {
    if (window.confirm(`Excluir "${filme.titulo}"?`)) {
      onExcluir(filme.id)
      navigate('/')
    }
  }

  return (
    <div className="detalhes">
      <ImagemFilme src={filme.imagemUrl} alt={`Pôster de ${filme.titulo}`} className="detalhes-img" />
      <div className="detalhes-info">
        <h2>{filme.titulo}</h2>
        <p><strong>Gênero:</strong> {filme.categoria}</p>
        <p><strong>Ano:</strong> {filme.ano || 'Não informado'}</p>
        <p><strong>Diretor:</strong> {filme.diretor || 'Não informado'}</p>
        <p><strong>Avaliação:</strong> ⭐ {filme.nota}</p>
        <p><strong>Sinopse:</strong> {filme.sinopse || 'Sem sinopse.'}</p>

        <div className="card-botoes">
          <button
            className={filme.favorito ? 'btn btn-fav ativo' : 'btn btn-fav'}
            onClick={() => onFavoritar(filme.id)}
          >
            {filme.favorito ? '★ Favorito' : '☆ Favoritar'}
          </button>
          <button className="btn btn-perigo" onClick={excluir}>Excluir</button>
          <Link to="/" className="btn">← Voltar</Link>
        </div>
      </div>
    </div>
  )
}
