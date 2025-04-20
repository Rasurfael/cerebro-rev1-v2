'use client'

import { useRef, useState } from 'react'
import * as XLSX from 'xlsx'

const UploadClientesPage = () => {
  const [clientes, setClientes] = useState<any[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const binaryStr = e.target?.result
        const wb = XLSX.read(binaryStr, { type: 'binary' })
        const ws = wb.Sheets[wb.SheetNames[0]]
        const data = XLSX.utils.sheet_to_json(ws)

        setClientes(data)
        console.log('Clientes carregados:', data)
      }
      reader.readAsBinaryString(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6">Upload de Clientes</h1>
      
      <div className="bg-white p-8 shadow-lg rounded-2xl">
        <input
          ref={fileInputRef}
          type="file"
          accept=".xls,.xlsx,.csv"
          onChange={handleFileChange}
          className="mb-4"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-black text-white py-2 px-4 rounded-xl"
        >
          Carregar Planilha de Clientes
        </button>
      </div>

      {clientes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Clientes Cadastrados na Planilha</h2>
          <ul>
            {clientes.map((cliente, index) => (
              <li key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <span>{cliente['Nome']}</span> {/* Modifique conforme o nome da coluna na planilha */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UploadClientesPage

