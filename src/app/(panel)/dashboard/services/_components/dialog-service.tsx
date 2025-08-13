'use client'
import { useState } from 'react'
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  DialogServiceFormData,
  useDialogServiceForm,
} from './dialog-service-form'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { convertRealToCents } from '@/utils/convertCurrency'
import { createNewService } from '../_actions/create-service'
import { toast } from 'sonner'

interface DialogServiceProps {
  closeModal: () => void
}

export function DialogService({ closeModal }: DialogServiceProps) {
  const form = useDialogServiceForm()
  const [loading, setLoading] = useState(false)

  async function onSubmit(values: DialogServiceFormData) {
    setLoading(true)
    const priceInCents = convertRealToCents(values.price)

    const hours = parseInt(values.hours) || 0
    const minutes = parseInt(values.minutes) || 0

    // converter horas p minutos
    const duration = hours * 60 + minutes

    const response = await createNewService({
      name: values.name,
      price: priceInCents,
      duration: duration,
    })

    setLoading(false)

    if (response.error) {
      toast.error(response.error)
      return
    }

    toast.success('Serviço cadastrado com sucesso!')
    handleCloseModal()
  }

  function handleCloseModal() {
    form.reset()
    closeModal()
  }

  function changeCurrency(event: React.ChangeEvent<HTMLInputElement>) {
    let { value } = event.target
    value = value.replace(/\D/g, '') // Remove non-numeric characters

    if (value) {
      value = (parseInt(value, 10) / 100).toFixed(2)
      value = value.replace('.', ',')
      value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }

    event.target.value = value
    form.setValue('price', value)
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo Serviço</DialogTitle>
        <DialogDescription>Adicione um novo serviço.</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">
                    Nome do serviço:
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o nome do serviço..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Preço:</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o preço do serviço..."
                      {...field}
                      onChange={changeCurrency}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <p className="font-semibold">Tempo de duração do serviço</p>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="hours"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Horas:</FormLabel>
                  <FormControl>
                    <Input placeholder="1" min="0" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="minutes"
              render={({ field }) => (
                <FormItem className="my-2">
                  <FormLabel className="font-semibold">Minutos:</FormLabel>
                  <FormControl>
                    <Input placeholder="0" min="0" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-4 font-semibold text-white bg-blue-500 hover:bg-blue-600 cursor-pointer"
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Adicionar Serviço'}
          </Button>
        </form>
      </Form>
    </>
  )
}
