// src/app/admin/dashboard/page.tsx
'use client'

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Visão Geral</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow border">
          <h2 className="text-sm text-gray-500 mb-1">Oportunidades</h2>
          <p className="text-2xl font-bold text-gray-800">12</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <h2 className="text-sm text-gray-500 mb-1">Orçamentos</h2>
          <p className="text-2xl font-bold text-gray-800">5 em andamento</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <h2 className="text-sm text-gray-500 mb-1">Contratos</h2>
          <p className="text-2xl font-bold text-gray-800">8 assinados</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow border">
          <h2 className="text-sm text-gray-500 mb-1">Visitas Técnicas</h2>
          <p className="text-2xl font-bold text-gray-800">3 agendadas</p>
        </div>
      </div>
    </div>
  )
}

