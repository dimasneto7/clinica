import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const session = await getSession()

  if (!session) {
    redirect('/')
  }

  return (
    <div>
      <h1>Página Dashboard</h1>
      <div className="full h-[600px] bg-gray-200"></div>
      <div className="full h-[600px] bg-gray-200"></div>
    </div>
  )
}
