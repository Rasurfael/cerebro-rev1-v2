'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type ProtectedLayoutProps = {
  children: ReactNode
  allowedRoles?: string[] // ex: ['admin'], ['dev', 'admin'], etc
}

export default function ProtectedLayout({
  children,
  allowedRoles = ['admin', 'dev'], // por padrão só permite admin/dev
}: ProtectedLayoutProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)
  const [userRole, setUserRole] = useState<string | null>(null)

  useEffect(() => {
    const token = localStorage.getItem('cerebro-token')
    const role = localStorage.getItem('cerebro-role') // novo: nível de acesso
    const isLoginPage = pathname === '/login'

    // Sem token e não na página de login: redireciona para login
    if (!token && !isLoginPage) {
      router.push('/login')
      return
    }

    // Já está logado e acessando login: redireciona para dashboard
    if (token && isLoginPage) {
      router.push('/admin/dashboard')
      return
    }

    // Está logado, mas não tem permissão
    if (token && role && !allowedRoles.includes(role)) {
      router.push('/unauthorized') // página opcional para acesso negado
      return
    }

    // OK
    setUserRole(role)
    setIsAuthenticated(!!token)
  }, [router, pathname, allowedRoles])

  if (isAuthenticated === null) {
    return (
      <div className="text-white text-center mt-20 text-lg">
        Carregando verificação de acesso...
      </div>
    )
  }

  return <>{children}</>
}
