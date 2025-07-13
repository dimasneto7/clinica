import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import fotoImg from '../../../../public/foto2.png'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function Professionals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-center mb-12 font-bold">
          Clínicas Disponíveis
        </h2>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <CardContent>
              <div>
                <div className="relative h-52">
                  <Image
                    src={fotoImg}
                    alt="Clínica"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Clínica Master</h3>
                    <p className="text-sm font-light">
                      Rua: Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                </div>
                <Link
                  href="/clinica/123"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center py-2 rounded text-sm md:text-base font-medium"
                >
                  Agendar Horário
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </section>
  )
}
