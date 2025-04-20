'use client'

import { useRouter } from 'next/navigation'

const perfis = [
  { id: 'diretor', label: 'Diretor' },
  { id: 'gerente', label: 'Gerente de Vendas' },
  { id: 'orçamentista', label: 'Orçamentista' },
  { id: 'admin', label: 'Administrador' },
  { id: 'coordenador', label: 'Coord. de Pré-vendas' }
]

export default function EscolherPerfil() {
  const router = useRouter()

  const selecionarPerfil = (id: string) => {
    localStorage.setItem('cerebro-perfil', id)
    router.push('/admin/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg max-w-xl w-full">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Selecione seu Perfil de Acesso
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {perfis.map((perfil) => (
            <button
              key={perfil.id}
              onClick={() => selecionarPerfil(perfil.id)}
              className="bg-black text-white rounded-xl px-4 py-3 hover:opacity-90"
            >
              {perfil.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

