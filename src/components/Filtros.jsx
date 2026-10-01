import categorias from '../data/categorias.js'

// Campo de busca + filtro por gênero (inputs controlados pelo estado da Home)
export default function Filtros({ busca, setBusca, categoria, setCategoria }) {
  return (
    <div className="filtros">
      <input
        type="text"
        placeholder="Buscar por título..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todos os gêneros</option>
        {categorias.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
}
