'use client'

import { useRouter } from 'next/navigation'

export default function Sidebar() {
  const router = useRouter()

  // Verificar se o token de autenticação está presente
  if (!localStorage.getItem('cerebro-token')) {
    router.push('/admin/login') // Se não houver token, redireciona para a tela de login
    return null
  }

  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Menu Administrativo</h2>
      <ul>
        <li>
          <a href="/admin/dashboard" className="block py-2 px-4 hover:bg-gray-700">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/clients" className="block py-2 px-4 hover:bg-gray-700">
            Gerenciar Clientes
          </a>
        </li>
        <li>
          <a href="/admin/orcamentos" className="block py-2 px-4 hover:bg-gray-700">
            Gerenciar Orçamentos
          </a>
        </li>
        <li>
          <a href="/admin/configuracoes" className="block py-2 px-4 hover:bg-gray-700">
            Configurações
          </a>
        </li>
      </ul>
    </div>
  )
}

