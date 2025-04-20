'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'  // Para capturar o ID do cliente
import cep from 'cep-promise'

export default function EditarClientePage() {
  const router = useRouter()
  const { id } = useParams() // Para obter o ID do cliente da URL
  const [cliente, setCliente] = useState<any | null>(null)
  
  // Dados do cliente
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

  // Função para buscar os dados do cliente
  useEffect(() => {
    if (id) {
      // Supondo que você tenha um sistema para buscar dados de um cliente pelo ID (via API ou dados estáticos)
      const clienteEncontrado = {
        cnpj: '12345678000195',
        nomeEmpresa: 'Exemplo S.A.',
        telefone: '(11) 98765-4321',
        cep: '01001000',
        endereco: 'Rua Exemplo, 123',
        bairro: 'Centro',
        cidade: 'São Paulo',
        estado: 'SP',
        contatoNome: 'João Silva',
        contatoCargo: 'Gerente',
        contatoTelefone: '(11) 98765-4321',
        contatoEmail: 'joao@exemplo.com',
      }

      // Preenche os campos do formulário com os dados do cliente encontrado
      setCliente(clienteEncontrado)
      setCnpj(clienteEncontrado.cnpj)
      setNomeEmpresa(clienteEncontrado.nomeEmpresa)
      setTelefone(clienteEncontrado.telefone)
      setCepInput(clienteEncontrado.cep)
      setEndereco(clienteEncontrado.endereco)
      setBairro(clienteEncontrado.bairro)
      setCidade(clienteEncontrado.cidade)
      setEstado(clienteEncontrado.estado)
      setContatoNome(clienteEncontrado.contatoNome)
      setContatoCargo(clienteEncontrado.contatoCargo)
      setContatoTelefone(clienteEncontrado.contatoTelefone)
      setContatoEmail(clienteEncontrado.contatoEmail)
    }
  }, [id])

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorCep = e.target.value
    setCepInput(valorCep)

    if (valorCep.length === 8) {
      try {
        const dadosCep = await cep(valorCep)
        setEndereco(dadosCep.street)
        setBairro(dadosCep.neighborhood)
        setCidade(dadosCep.city)
        setEstado(dadosCep.state)
      } catch (error) {
        console.log('Erro ao buscar CEP:', error)
      }
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Aqui você pode realizar a atualização dos dados no banco de dados
    const clienteAtualizado = {
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

    // Exemplo: substituir o cliente no banco de dados
    console.log('Cliente Atualizado:', clienteAtualizado)

    // Após a edição, redireciona de volta para a página de clientes
    router.push('/admin/clientes')
  }

  if (!cliente) return <div>Carregando...</div> // Mostrar um "Carregando..." até os dados do cliente estarem prontos

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-2xl border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-gray-900">Editar Cliente</h1>

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
            Atualizar Cliente
          </button>
        </form>
      </div>
    </div>
  )
}

