'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Select from 'react-select'

export default function NovoOrcamentoPage() {
  const router = useRouter()
  const [cliente, setCliente] = useState('')
  const [tipo, setTipo] = useState('')
  const [orcamentoNumero, setOrcamentoNumero] = useState('')

  const clientes = [
    { value: 'Cliente1', label: 'Cliente 1' },
    { value: 'Cliente2', label: 'Cliente 2' },
    { value: 'Cliente3', label: 'Cliente 3' },
  ]

  const tipos = [
    { value: 'Ven', label: 'Venda (somente materiais)' },
    { value: 'Proj', label: 'Projeto (materiais e serviço)' },
    { value: 'Serv', label: 'Serviço Avulso' },
    { value: 'Cont', label: 'Contrato de Manutenção' },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const numeroOrcamento = `${tipo}${new Date().toLocaleDateString().replace(/\//g, '')}${new Date().toLocaleTimeString().replace(/:/g, '')}`
    setOrcamentoNumero(numeroOrcamento)
    console.log({ cliente, tipo, numeroOrcamento })

    // Simulação de envio e redirecionamento
    router.push('/admin/orcamentos')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 shadow rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Novo Orçamento</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Select
            options={clientes}
            value={cliente ? { value: cliente, label: cliente } : null}
            onChange={(selected) => setCliente(selected?.value || '')}
            placeholder="Selecione o nome do cliente"
            className="w-full"
          />
          <Select
            options={tipos}
            value={tipos.find((tipoOption) => tipoOption.value === tipo)}
            onChange={(selected) => setTipo(selected?.value || '')}
            placeholder="Selecione o tipo de orçamento"
            className="w-full"
          />
          <input
            type="text"
            placeholder="Número do orçamento (gerado automaticamente)"
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            value={orcamentoNumero}
            disabled
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
          >
            Salvar orçamento
          </button>
        </form>
      </div>
    </div>
  )
}

