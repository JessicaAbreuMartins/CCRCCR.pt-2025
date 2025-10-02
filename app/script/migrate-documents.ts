// Scaffold Next.js CCRCCR.pt 2025 — Scripts de migração de PDFs e documentos

// Estrutura sugerida:
// scripts/migrate-documents.ts

import fs from 'fs'
import path from 'path'
import { uploadToCMS } from './cms-client' // função hipotética para enviar arquivos ao CMS

// Diretório com PDFs exportados do WordPress
const DOCS_DIR = path.join(process.cwd(), 'scripts', 'pdfs')

async function migrateDocuments() {
  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith('.pdf'))

  for (const file of files) {
    const filePath = path.join(DOCS_DIR, file)
    const fileBuffer = fs.readFileSync(filePath)

    // Nome do documento sem extensão
    const title = path.parse(file).name

    // Upload para CMS (Headless WordPress, Sanity, Strapi, etc.)
    try {
      const result = await uploadToCMS({
        title,
        fileBuffer,
        fileName: file,
        type: 'document'
      })
      console.log(`Documento migrado: ${title}`, result)
    } catch (err) {
      console.error(`Falha ao migrar ${title}:`, err)
    }
  }
}

// Executar script
migrateDocuments().then(() => console.log('Migração de PDFs concluída'))
