import banner from './assets/banner.svg'
import bg from './assets/bg.svg'

import { Avatar } from './components/avatar'
import { Description } from './components/description'
import { Skill } from './components/skill'
import { SubTitle } from './components/subTitle'
import { Title } from './components/text'

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#171818]">
      <div className="w-96 h-[500px] rounded-2xl bg-[#101828] relative ">
        <div className='flex flex-col items-center justify-center  '>
          <img src={banner} alt="Banner" className='object-cover w-full rounded-t-2xl'/>
          <Avatar />
          <div className='flex flex-col items-center justify-center mt-4'>
            <Title text='Bruno Gomes' />
            <SubTitle subTitle='Desenvolvedor Front-end' />
          </div>
          <div className='flex flex-col items-center justify-center mt-8 px-6'>
            <Description description='Cria interfaces bonitas, rápidas e intuitivas.'/>
          </div>
          <div className='flex items-center justify-center mt-8 gap-4'>
            <Skill />
          </div>
        </div>
        <img src={bg} alt="" className= 'absolute bottom-0 right-0 rounded-2xl' />
      </div>
    </main>
  )
}
