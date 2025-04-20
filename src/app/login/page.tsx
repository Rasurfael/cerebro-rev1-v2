'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [recuperandoSenha, setRecuperandoSenha] = useState(false) // Para alternar entre tela de login e recuperação de senha

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulação de login para o usuário de desenvolvimento
    if (email === 'rafael@r3s.com.br' && senha === 'Rafael123') {
      localStorage.setItem('cerebro-token', 'rafael-token') // Simulando o token do Rafael
      router.push('/admin/dashboard') // Redireciona para o dashboard após login
    } else if (email === 'admin@r3s.com.br' && senha === 'admin123') {
      localStorage.setItem('cerebro-token', 'mocked-token') // Simulando o token
      router.push('/admin/dashboard') // Redireciona para o dashboard após login
    } else {
      setErro('Credenciais inválidas')
    }
  }

  const handleRecuperarSenha = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setErro('Instruções para recuperação de senha foram enviadas para o e-mail fornecido.')
      setRecuperandoSenha(false)
    } else {
      setErro('Por favor, insira o e-mail para recuperação de senha.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={recuperandoSenha ? handleRecuperarSenha : handleLogin}
        className="bg-white p-8 shadow-lg rounded-lg w-full max-w-sm"
      >
        {/* Logotipo da R3S */}
        <img
          src="/logo-r3s.png" // Caminho correto para a imagem no diretório public
          alt="Logo R3S"
          className="w-32 h-auto mx-auto mb-6"
        />
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          {recuperandoSenha ? 'Recuperar Senha' : 'Acesso ao CÉREBRO'}
        </h2>
        {erro && <p className="text-red-500">{erro}</p>} {/* Texto de erro */}

        {/* Campo de E-mail */}
        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        {/* Campo de Senha (apenas se não estiver recuperando senha) */}
        {!recuperandoSenha && (
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md text-black"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        )}

        {/* Botões */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          {recuperandoSenha ? 'Enviar Instruções' : 'Entrar'}
        </button>

        {/* Botão de "Esqueceu a Senha" */}
        {!recuperandoSenha && (
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() => setRecuperandoSenha(true)}
              className="text-blue-500 text-sm"
            >
              Esqueceu a senha?
            </button>
          </div>
        )}

        {/* Informações extras */}
        {recuperandoSenha && (
          <div className="mt-4 text-center text-sm text-gray-700">
            Se o e-mail estiver registrado, você receberá um link para redefinir sua senha.
          </div>
        )}
      </form>
    </div>
  )
}

