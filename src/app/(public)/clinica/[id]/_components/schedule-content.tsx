'use client'

import Image from 'next/image'
import imgTest from '../../../../../../public/foto2.png'
import { MapPin } from 'lucide-react'
import { Prisma } from '@/generated/prisma'
import { useAppointmentForm, AppointmentFormData } from './schedule-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

type UserWithServiceAndSubscription = Prisma.UserGetPayload<{
  include: {
    service: true
    subscription: true
  }
}>

interface ScheduleContentProps {
  clinic: UserWithServiceAndSubscription
}

export function ScheduleContent({ clinic }: ScheduleContentProps) {
  const form = useAppointmentForm()

  return (
    <div className="min-h-screen flex flex-col">
      <div className="h-32 bg-blue-500" />
      <section className="container mx-auto px-4 -mt-24">
        <div className="max-w-2xl mx-auto">
          <article className="flex flex-col items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-8">
              <Image
                src={clinic.image ? clinic.image : imgTest}
                alt="Foto da clínica"
                className="object-cover"
                fill
              />
            </div>
            <h1 className="text-2xl font-bold mb-2">{clinic.name}</h1>
            <div className="flex items-center gap-1">
              <MapPin className="w-5 h-5" />
              <span>
                {clinic.address ? clinic.address : 'Endereço não informado'}
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* Formulário de Agendamento */}
      <Form {...form}>
        <form className="mx-2 pace-y-6 bg-white p-6 border rounded-md shadow-sm">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel className="font-semibold">Nome completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  )
}
