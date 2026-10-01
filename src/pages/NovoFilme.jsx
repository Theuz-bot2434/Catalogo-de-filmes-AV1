import { useState } from 'react'
import { Link } from 'react-router-dom'
import categorias from '../data/categorias.js'

const formInicial = {
  titulo: '',
  categoria: '',
  imagemUrl: '',
  ano: '',
  diretor: '',
  nota: '',
  sinopse: '',
}

export default function NovoFilme({ onAdicionar }) {
  const [form, setForm] = useState(formInicial)
  const [erros, setErros] = useState({})
  const [sucesso, setSucesso] = useState('')

  // Atualiza o campo que foi digitado (formulário controlado)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Campos obrigatórios: título, gênero e URL da imagem
  function validar() {
    const novosErros = {}
    if (form.titulo.trim() === '') novosErros.titulo = 'O título é obrigatório.'
    if (form.categoria === '') novosErros.categoria = 'Escolha um gênero.'
    if (form.imagemUrl.trim() === '') novosErros.imagemUrl = 'A URL da imagem é obrigatória.'
    return novosErros
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSucesso('')
    const novosErros = validar()
    setErros(novosErros)

    if (Object.keys(novosErros).length > 0) return // tem erro: não salva

    onAdicionar({
      titulo: form.titulo.trim(),
      categoria: form.categoria,
      imagemUrl: form.imagemUrl.trim(),
      sinopse: form.sinopse.trim(),
      nota: form.nota === '' ? 0 : Number(form.nota),
      ano: form.ano === '' ? '' : Number(form.ano),
      diretor: form.diretor.trim(),
    })
    setForm(formInicial)
    setSucesso('Filme adicionado com sucesso!')
  }

  return (
    <div>
      <h2>Cadastrar novo filme</h2>

      {sucesso && (
        <p className="msg msg-sucesso">
          {sucesso} <Link to="/">Ver catálogo</Link>
        </p>
      )}
      {Object.keys(erros).length > 0 && (
        <p className="msg msg-erro">Corrija os campos obrigatórios abaixo.</p>
      )}

      <form className="formulario" onSubmit={handleSubmit} noValidate>
        <label>
          Título *
          <input name="titulo" value={form.titulo} onChange={handleChange} />
          {erros.titulo && <span className="erro">{erros.titulo}</span>}
        </label>

        <label>
          Gênero *
          <select name="categoria" value={form.categoria} onChange={handleChange}>
            <option value="">Selecione...</option>
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {erros.categoria && <span className="erro">{erros.categoria}</span>}
        </label>

        <label>
          URL da imagem *
          <input
            name="imagemUrl"
            value={form.imagemUrl}
            onChange={handleChange}
            placeholder="https://..."
          />
          {erros.imagemUrl && <span className="erro">{erros.imagemUrl}</span>}
        </label>

        <label>
          Ano
          <input name="ano" type="number" value={form.ano} onChange={handleChange} />
        </label>

        <label>
          Diretor
          <input name="diretor" value={form.diretor} onChange={handleChange} />
        </label>

        <label>
          Nota (0 a 10)
          <input
            name="nota"
            type="number"
            min="0"
            max="10"
            step="0.1"
            value={form.nota}
            onChange={handleChange}
          />
        </label>

        <label>
          Sinopse
          <textarea name="sinopse" rows="4" value={form.sinopse} onChange={handleChange} />
        </label>

        <button type="submit" className="btn btn-principal">Salvar filme</button>
      </form>
    </div>
  )
}
