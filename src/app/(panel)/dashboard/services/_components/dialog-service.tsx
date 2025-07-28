'use client'

import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { useDialogServiceForm } from './dialog-service-form'
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

export function DialogService() {
  const form = useDialogServiceForm()

  return (
    <>
      <DialogHeader>
        <DialogTitle>Novo Serviço</DialogTitle>
        <DialogDescription>Adicione um novo serviço.</DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form className="space-y-2">
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
          >
            Adicionar Serviço
          </Button>
        </form>
      </Form>
    </>
  )
}
