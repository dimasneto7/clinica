'use client'
import { useState } from 'react'
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
import { LogIn, Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const session = true

  const navItems = [
    { href: '#profissionais', label: 'Profissionais' },
    { href: '#contato', label: 'Contato' },
  ]

  const NavLink = () => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          onClick={() => setIsOpen(false)}
          asChild
          className="bg-transparent hover:bg-transparent text-black text-base shadow-none p-0"
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {session ? (
        <Link
          href="/dashboard"
          className="flex items-center justify-center gap-2 text-base text-black"
        >
          Acessar Clínica
        </Link>
      ) : (
        <Button className="mt-4 text-base text-black">
          <LogIn />
          Portal da Clínica
        </Button>
      )}
    </>
  )

  return (
    <header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-blue-500">
          Master <span className="font-light">Clínica</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <NavLink />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-transparent"
              variant="ghost"
              size="icon"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-[9999] pl-6"
          >
            <SheetHeader></SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Veja nossos links</SheetDescription>
            <nav className="flex flex-col items-start space-y-1 mt-2">
              <NavLink />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
