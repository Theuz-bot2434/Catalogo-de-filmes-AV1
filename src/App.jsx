import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import filmesIniciais from './data/filmes.json'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Detalhes from './pages/Detalhes.jsx'
import NovoFilme from './pages/NovoFilme.jsx'

const CHAVE_STORAGE = 'cinecatalogo-filmes-v2'

// Se já existir algo salvo no localStorage, usa. Senão, usa o filmes.json.
function carregarFilmes() {
  try {
    const salvo = localStorage.getItem(CHAVE_STORAGE)
    if (salvo) return JSON.parse(salvo)
  } catch (erro) {
    console.error('Erro ao ler o localStorage', erro)
  }
  return filmesIniciais
}

export default function App() {
  const [filmes, setFilmes] = useState(carregarFilmes)

  // Sempre que a lista mudar (favoritar, adicionar, excluir), salva no localStorage
  useEffect(() => {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(filmes))
  }, [filmes])

  function alternarFavorito(id) {
    setFilmes(filmes.map((f) => (f.id === id ? { ...f, favorito: !f.favorito } : f)))
  }

  function adicionarFilme(novoFilme) {
    setFilmes([...filmes, { ...novoFilme, id: Date.now(), favorito: false }])
  }

  function excluirFilme(id) {
    setFilmes(filmes.filter((f) => f.id !== id))
  }

  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                filmes={filmes}
                onFavoritar={alternarFavorito}
                onExcluir={excluirFilme}
              />
            }
          />
          <Route
            path="/filme/:id"
            element={
              <Detalhes
                filmes={filmes}
                onFavoritar={alternarFavorito}
                onExcluir={excluirFilme}
              />
            }
          />
          <Route path="/novo-filme" element={<NovoFilme onAdicionar={adicionarFilme} />} />
          <Route path="*" element={<p className="mensagem">Página não encontrada.</p>} />
        </Routes>
      </main>
    </>
  )
}
