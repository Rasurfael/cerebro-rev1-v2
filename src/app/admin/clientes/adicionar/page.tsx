'use client'

import { useState } from 'react'
import cep from 'cep-promise'  // Importando o novo pacote de CEP

export default function AdicionarClientePage() {
  const [cnpj, setCnpj] = useState('')
  const [nomeEmpresa, setNomeEmpresa] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cepInput, setCepInput] = useState('')
  const [endereco, setEndereco] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [contatoNome, setContatoNome] = useState('')
  const [contatoCargo, setContatoCargo] = useState('')
  const [contatoTelefone, setContatoTelefone] = useState('')
  const [contatoEmail, setContatoEmail] = useState('')
  const [clientes, setClientes] = useState([])  // Aqui pode ser a lista dos clientes cadastrados

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorCep = e.target.value
    setCepInput(valorCep)

    if (valorCep.length === 8) { // Apenas consulta após 8 caracteres (CEP completo)
      try {
        const dadosCep = await cep(valorCep)  // Consulta o CEP
        setEndereco(dadosCep.street)  // Logradouro
        setBairro(dadosCep.neighborhood)  // Bairro
        setCidade(dadosCep.city)  // Cidade
        setEstado(dadosCep.state)  // Estado
      } catch (error) {
        console.log('Erro ao buscar CEP:', error)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const novoCliente = {
      cnpj,
      nomeEmpresa,
      telefone,
      endereco,
      bairro,
      cidade,
      estado,
      contato: {
        nome: contatoNome,
        cargo: contatoCargo,
        telefone: contatoTelefone,
        email: contatoEmail,
      },
    }

    setClientes([...clientes, novoCliente])  // Adicionando o novo cliente à lista

    // Limpar campos após envio
    setCnpj('')
    setNomeEmpresa('')
    setTelefone('')
    setCepInput('')
    setEndereco('')
    setBairro('')
    setCidade('')
    setEstado('')
    setContatoNome('')
    setContatoCargo('')
    setContatoTelefone('')
    setContatoEmail('')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-xl mx-auto bg-white p-8 shadow rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Adicionar Novo Cliente</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="Nome da Empresa"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="CEP"
            value={cepInput}
            onChange={handleCepChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="Rua"
            value={endereco}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            disabled
          />
          <input
            type="text"
            placeholder="Bairro"
            value={bairro}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            disabled
          />
          <input
            type="text"
            placeholder="Cidade"
            value={cidade}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            disabled
          />
          <input
            type="text"
            placeholder="Estado"
            value={estado}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            disabled
          />

          <h2 className="text-xl font-semibold mt-6">Contato da Empresa</h2>
          <input
            type="text"
            placeholder="Nome"
            value={contatoNome}
            onChange={(e) => setContatoNome(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="Cargo"
            value={contatoCargo}
            onChange={(e) => setContatoCargo(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            value={contatoTelefone}
            onChange={(e) => setContatoTelefone(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            value={contatoEmail}
            onChange={(e) => setContatoEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-gray-50"
            required
          />
          
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl hover:opacity-90 transition"
          >
            Adicionar Cliente
          </button>
        </form>
      </div>
    </div>
  )
}

