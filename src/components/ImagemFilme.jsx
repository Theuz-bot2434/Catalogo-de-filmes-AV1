// Mostra a imagem do filme. Se o link quebrar, mostra uma imagem padrão.
const IMAGEM_PADRAO =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="450"><rect width="100%" height="100%" fill="#2a2f45"/><text x="50%" y="50%" fill="#aaa" font-size="22" text-anchor="middle" font-family="sans-serif">Sem imagem</text></svg>'
  )

export default function ImagemFilme({ src, alt, className }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = IMAGEM_PADRAO
      }}
    />
  )
}
