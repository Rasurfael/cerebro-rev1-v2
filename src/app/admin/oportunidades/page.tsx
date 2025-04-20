'use client'

import { useState } from 'react'

type Oportunidade = {
  id: number
  nome: string
  etapa: string
}

const etapas = [
  'Prospecção',
  'Contato Realizado',
  'Diagnóstico',
  'Orçamento',
  'Aprovação',
  'Contrato Fechado'
]

export default function OportunidadesPage() {
  const [oportunidades, setOportunidades] = useState<Oportunidade[]>([
    { id: 1, nome: 'Prefeitura de Ubatuba', etapa: 'Orçamento' },
    { id: 2, nome: 'Condomínio Vista Verde', etapa: 'Contato Realizado' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [novoNome, setNovoNome] = useState('')
  const [novaEtapa, setNovaEtapa] = useState(etapas[0])

  const adicionarOportunidade = () => {
    if (!novoNome) return
    const nova = {
      id: Date.now(),
      nome: novoNome,
      etapa: novaEtapa,
    }
    setOportunidades([...oportunidades, nova])
    setNovoNome('')
    setNovaEtapa(etapas[0])
    setShowModal(false)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Funil de Oportunidades</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-4 py-2 rounded-xl hover:opacity-90"
        >
          + Nova Oportunidade
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {etapas.map((etapa) => (
          <div key={etapa} className="bg-white rounded-xl shadow-md p-4 border border-gray-200">
            <h2 className="text-lg font-semibold mb-2 text-black">{etapa}</h2>
            {oportunidades
              .filter((o) => o.etapa === etapa)
              .map((o) => (
                <div
                  key={o.id}
                  className="bg-gray-50 rounded-lg p-2 mb-2 border border-gray-300 text-black"
                >
                  {o.nome}
                </div>
              ))}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h3 className="text-lg font-bold mb-4 text-black">Nova Oportunidade</h3>

            <input
              type="text"
              placeholder="Nome do cliente ou projeto"
              className="w-full px-4 py-2 border rounded-lg mb-4 text-black"
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
            />

            <select
              className="w-full px-4 py-2 border rounded-lg mb-4 text-black"
              value={novaEtapa}
              onChange={(e) => setNovaEtapa(e.target.value)}
            >
              {etapas.map((etapa) => (
                <option key={etapa}>{etapa}</option>
              ))}
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-600 hover:text-black"
              >
                Cancelar
              </button>
              <button
                onClick={adicionarOportunidade}
                className="bg-black text-white px-4 py-2 rounded-lg text-sm"
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

