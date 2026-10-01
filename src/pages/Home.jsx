import { useState } from 'react'
import Filtros from '../components/Filtros.jsx'
import CardFilme from '../components/CardFilme.jsx'

export default function Home({ filmes, onFavoritar, onExcluir }) {
  const [busca, setBusca] = useState('')
  const [categoria, setCategoria] = useState('')

  const filmesFiltrados = filmes.filter((f) => {
    const combinaTitulo = f.titulo.toLowerCase().includes(busca.toLowerCase())
    const combinaCategoria = categoria === '' || f.categoria === categoria
    return combinaTitulo && combinaCategoria
  })

  return (
    <>
      <section className="banner">
        <h2>Bem-vindo ao CineCatálogo</h2>
        <p>
          Organize seus filmes preferidos: pesquise, filtre por gênero, marque
          favoritos e cadastre novos títulos no seu catálogo.
        </p>
      </section>

      <Filtros
        busca={busca}
        setBusca={setBusca}
        categoria={categoria}
        setCategoria={setCategoria}
      />

      {filmesFiltrados.length === 0 ? (
        <p className="mensagem">Nenhum filme encontrado.</p>
      ) : (
        <section className="grid">
          {filmesFiltrados.map((filme) => (
            <CardFilme
              key={filme.id}
              filme={filme}
              onFavoritar={onFavoritar}
              onExcluir={onExcluir}
            />
          ))}
        </section>
      )}
    </>
  )
}
