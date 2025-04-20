'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname() // Captura a rota atual
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('cerebro-token')
    const isLoginPage = pathname === '/login' // Verifica se estamos na página de login

    // Se não tiver token e não estiver na página de login, redireciona
    if (!token && !isLoginPage) {
      router.push('/login') // Redireciona para a página de login
    } else if (token && isLoginPage) {
      router.push('/admin/dashboard') // Se já estiver logado, vai direto para o dashboard
    } else {
      setIsAuthenticated(!!token) // Se o token existir, marca como autenticado
    }
  }, [router, pathname]) // Depende do pathname para verificar a página atual

  if (isAuthenticated === null) {
    return null // Loading state, aguarda a verificação de autenticação
  }

  return <>{children}</> // Exibe o conteúdo protegido se o usuário estiver autenticado
}

