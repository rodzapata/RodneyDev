
export default function Image({ src, alt, width = '100%' }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        display: 'block',
        width,
        maxWidth: '100%',
        height: 'auto',
        margin: '1.5rem auto',
        borderRadius: '8px'
      }}
    />
  )
}
