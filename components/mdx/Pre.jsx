
'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

export default function Pre({ children, ...props }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy(event) {
    const pre = event.currentTarget
      .closest('.code-block-wrapper')
      ?.querySelector('pre')

    const code = pre?.innerText ?? ''

    if (!code.trim()) {
      console.error('No se encontró texto en el bloque de código.')
      return
    }

    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)

      setTimeout(() => setCopied(false), 1800)
    } catch (error) {
      console.error('No se pudo copiar el código:', error)
    }
  }

  return (
    <div className="code-block-wrapper">
      <button
        type="button"
        onClick={handleCopy}
        className={`copy-code-button ${copied ? 'is-copied' : ''}`}
        aria-label={copied ? 'Código copiado' : 'Copiar código'}
        title={copied ? 'Código copiado' : 'Copiar código'}
      >
        {copied ? (
          <Check size={16} strokeWidth={2.4} />
        ) : (
          <Copy size={16} strokeWidth={2} />
        )}
      </button>

      <pre className="mdx-pre" {...props}>
        {children}
      </pre>
    </div>
  )
}
