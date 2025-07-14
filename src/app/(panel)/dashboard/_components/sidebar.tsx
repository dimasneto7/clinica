'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  Banknote,
  CalendarCheck2,
  ChevronLeft,
  ChevronRight,
  Folder,
  List,
  Settings,
  UserPen,
} from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

export function SidebarDashboard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen w-full">
      <aside
        className={clsx(
          'flex flex-col border-r bg-background transition-all duration-300 p-4 h-full',
          {
            'w-20': isCollapsed,
            'w-64': !isCollapsed,
            'hidden md:flex md:fixed': true,
          }
        )}
      >
        <div className="mb-6">
          <Link
            href="/"
            className={clsx('font-bold text-blue-500', {
              'text-base': isCollapsed,
              'text-2xl': !isCollapsed,
            })}
          >
            Master <span className="font-light">Clínica</span>
          </Link>
        </div>

        <Button
          className="bg-gray-100 hover:bg-gray-50 text-zinc-900 self-end mb-2"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {!isCollapsed ? (
            <ChevronLeft className="w-12 h-12" />
          ) : (
            <ChevronRight className="w-12 h-12" />
          )}
        </Button>

        {isCollapsed && (
          <nav className="flex flex-col gap-1 overflow-hidden">
            <SidebarLink
              href="/dashboard"
              label="Agendamentos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<CalendarCheck2 className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/services"
              label="Serviços"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Folder className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/profile"
              label="Meu perfil"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<UserPen className="w-6 h-6" />}
            />
            <SidebarLink
              href="/dashboard/plans"
              label="Planos"
              pathname={pathname}
              isCollapsed={isCollapsed}
              icon={<Banknote className="w-6 h-6" />}
            />
          </nav>
        )}

        <Collapsible open={!isCollapsed}>
          <CollapsibleContent>
            <div>
              <nav className="flex flex-col gap-1 overflow-hidden">
                <span className="text-sm font-medium mt-1 mb-1 uppercase">
                  Painel
                </span>
              </nav>

              <SidebarLink
                href="/dashboard"
                label="Agendamentos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<CalendarCheck2 className="w-6 h-6" />}
              />

              <SidebarLink
                href="/dashboard/services"
                label="Serviços"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Folder className="w-6 h-6" />}
              />
            </div>

            <div className="mt-2">
              <span className="text-sm font-medium mb-1 uppercase">
                Configurações
              </span>

              <SidebarLink
                href="/dashboard/profile"
                label="Meu perfil"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<UserPen className="w-6 h-6" />}
              />

              <SidebarLink
                href="/dashboard/plans"
                label="Planos"
                pathname={pathname}
                isCollapsed={isCollapsed}
                icon={<Banknote className="w-6 h-6" />}
              />
            </div>
          </CollapsibleContent>
        </Collapsible>
      </aside>

      <div
        className={clsx('flex flex-1 flex-col transition-all duration-300', {
          'md:ml-20': isCollapsed,
          'md:ml-64': !isCollapsed,
        })}
      >
        <header className="md:hidden flex items-center justify-between border-b px-2 md:px-6 h-14 z-10 sticky top-0 bg-white">
          <Sheet>
            <div className="flex items-center gap-4">
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setIsCollapsed(false)}
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <h1 className="text-base md:text-lg font-semibold">
                Menu Master Clínica
              </h1>
            </div>
            <SheetContent side="right" className="sm:max-w-xs text-black px-3">
              <SheetTitle className="pt-3">Clínica App</SheetTitle>
              <SheetDescription>Menu Administrativo</SheetDescription>
              <nav className="grid gap-2 text-base pt-2 ">
                <SidebarLink
                  href="/dashboard"
                  label="Agendamentos"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<CalendarCheck2 className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/services"
                  label="Serviços"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<Folder className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/profile"
                  label="Meu perfil"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<UserPen className="w-6 h-6" />}
                />

                <SidebarLink
                  href="/dashboard/plans"
                  label="Planos"
                  pathname={pathname}
                  isCollapsed={isCollapsed}
                  icon={<Banknote className="w-6 h-6" />}
                />
              </nav>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex-1 py-4 px-2 md:p-6">{children}</main>
      </div>
    </div>
  )
}

interface SidebaLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  pathname: string
  isCollapsed: boolean
}

function SidebarLink({
  href,
  icon,
  isCollapsed,
  label,
  pathname,
}: SidebaLinkProps) {
  return (
    <Link href={href}>
      <div
        className={clsx(
          'flex items-center gap-2 px-3 py-2 rounded-md transition-colors',
          {
            'bg-blue-500 text-white': pathname === href,
            'bg-white text-black': pathname !== href,
          }
        )}
      >
        <span className="w-6 h-6">{icon}</span>
        {!isCollapsed && <span>{label}</span>}
      </div>
    </Link>
  )
}
