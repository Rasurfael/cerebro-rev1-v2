'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ClientesPage() {
  const [clientes, setClientes] = useState<any[]>([]) // Lista de clientes
  const [novoCliente, setNovoCliente] = useState(false)

  const handleNovoCliente = () => {
    setNovoCliente(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Clientes</h1>

        <div className="mb-6">
          <Link href="/admin/clientes/novo">
            <button
              className="bg-black text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-800 transition duration-200"
            >
              Adicionar Novo Cliente
            </button>
          </Link>
        </div>

        {/* Exibição dos clientes cadastrados */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Clientes Cadastrados</h2>
          {clientes.length > 0 ? (
            <ul className="space-y-4">
              {clientes.map((cliente) => (
                <li key={cliente.id} className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-900">{cliente.nome}</span>
                    <button className="text-blue-500 hover:underline">Editar</button>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span>{cliente.telefone}</span> | <span>{cliente.email}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Nenhum cliente cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  )
}

