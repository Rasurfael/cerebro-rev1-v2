'use client'

import { ReactNode } from 'react'
import ProtectedLayout from './ProtectedLayout/ProtectedLayout' // Importando o ProtectedLayout
import Link from 'next/link' // Importando o Link

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedLayout> {/* Usando ProtectedLayout para proteger o conteúdo */}
      <div className="flex">
        {/* Barra Lateral */}
        <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-8">Administração</h1>
          <ul>
            <li>
              <Link href="/admin/dashboard" className="block text-white hover:bg-gray-700 p-2 rounded mb-2">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/clientes" className="block text-white hover:bg-gray-700 p-2 rounded mb-2">
                Clientes
              </Link>
            </li>
            <li>
              <Link href="/admin/orcamentos" className="block text-white hover:bg-gray-700 p-2 rounded mb-2">
                Orçamentos
              </Link>
            </li>
            <li>
              <Link href="/admin/clientes/upload" className="block text-white hover:bg-gray-700 p-2 rounded mb-2">
                Upload de Clientes
              </Link>
            </li>
          </ul>
        </div>

        {/* Conteúdo da Página */}
        <div className="flex-1 p-6">
          {children} {/* Exibe o conteúdo da página somente se estiver autenticado */}
        </div>
      </div>
    </ProtectedLayout>
  )
}

