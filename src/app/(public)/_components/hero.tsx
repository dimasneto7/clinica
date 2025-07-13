import { Button } from '@/components/ui/button'
import Image from 'next/image'
import doctorImage from '../../../../public/doctor-hero.png'

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 pb-4 sm:pb-0 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-2 max-w-[600px] space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold">
              Lorem ipsum dolor sit amet consectetur.
            </h1>
            <p className="text-base md:text-lg font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              optio, error quas animi obcaecati magni placeat at assumenda dicta
              velit sapiente ab nesciunt enim quisquam similique quia labore, et
              expedita.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-fit">
              Encontre uma clínica
            </Button>
          </article>

          <div className="hidden lg:block">
            <Image
              src={doctorImage}
              alt="Doctor"
              width={340}
              height={400}
              className="object-contain"
              quality={100}
              priority
            />
          </div>
        </main>
      </div>
    </section>
  )
}
