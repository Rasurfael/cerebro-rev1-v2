// src/app/admin/orcamentos/page.tsx
'use client'

export default function OrcamentosPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Orçamentos</h1>

      <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th scope="col" className="px-4 py-3">Cliente</th>
              <th scope="col" className="px-4 py-3">Projeto</th>
              <th scope="col" className="px-4 py-3">Valor</th>
              <th scope="col" className="px-4 py-3">Status</th>
              <th scope="col" className="px-4 py-3 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-3">Prefeitura de Ubatuba</td>
              <td className="px-4 py-3">Estacionamento</td>
              <td className="px-4 py-3">R$ 18.300,00</td>
              <td className="px-4 py-3">Em elaboração</td>
              <td className="px-4 py-3 text-right">
                <button className="text-blue-600 hover:underline mr-4">Editar</button>
                <button className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="px-4 py-3">Condomínio Vista Verde</td>
              <td className="px-4 py-3">Portaria inteligente</td>
              <td className="px-4 py-3">R$ 7.800,00</td>
              <td className="px-4 py-3">Revisão</td>
              <td className="px-4 py-3 text-right">
                <button className="text-blue-600 hover:underline mr-4">Editar</button>
                <button className="text-red-600 hover:underline">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

