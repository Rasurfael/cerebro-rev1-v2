'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [recuperando, setRecuperando] = useState(false)
  const [recuperado, setRecuperado] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'rafael@r3s.com.br' && senha === 'Rafael123') {
      localStorage.setItem('cerebro-token', 'mocked-token')
      router.push('/admin/dashboard')
    } else {
      setErro('Credenciais inválidas')
    }
  }

  const handleRecuperar = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setRecuperado(true)
    } else {
      setErro('Informe seu e-mail para recuperar a senha')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a] relative">
      {/* Logo */}
      <img
        src="/logo-r3s.png"
        alt="Logo R3S"
        className="absolute top-10 left-10 h-10"
      />

      <form
        onSubmit={recuperando ? handleRecuperar : handleLogin}
        className="bg-white shadow-lg rounded-2xl p-10 w-full max-w-md border border-gray-200 text-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-black">
          {recuperando ? 'Recuperar Senha' : 'Acesso ao CÉREBRO'}
        </h2>

        {erro && <p className="text-red-500 text-sm mb-4">{erro}</p>}
        {recuperado && (
          <p className="text-green-600 text-sm mb-4">
            Se o e-mail estiver cadastrado, você receberá instruções em breve.
          </p>
        )}

        <input
          type="email"
          placeholder="E-mail"
          className="w-full px-4 py-2 border border-gray-300 rounded-xl mb-4 bg-gray-50 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {!recuperando && (
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl mb-6 bg-gray-50 text-black"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        )}

        <button
          type="submit"
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-xl mb-4"
        >
          {recuperando ? 'Enviar instruções' : 'Entrar'}
        </button>

        <div className="text-center text-sm text-gray-700">
          {!recuperando ? (
            <button
              type="button"
              onClick={() => {
                setErro('')
                setRecuperado(false)
                setRecuperando(true)
              }}
              className="text-blue-600 hover:underline"
            >
              Esqueceu a senha?
            </button>
          ) : (
            <button
              type="button"
              onClick={() => {
                setErro('')
                setRecuperado(false)
                setRecuperando(false)
              }}
              className="text-blue-600 hover:underline"
            >
              Voltar ao login
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
