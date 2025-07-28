'use server'

import prisma from '@/lib/prisma'

export async function getAllServices({ userId }: { userId: string }) {
  if (!userId) {
    return {
      error: 'Falha ao buscar serviço!',
    }
  }

  try {
    const services = await prisma.service.findMany({
      where: {
        userId: userId,
        status: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return {
      data: services,
    }
  } catch (error) {
    return {
      error: 'Falha ao buscar serviço!',
    }
  }
}
