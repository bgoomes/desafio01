import banner from './assets/banner.svg'
import bg from './assets/bg.svg'
import { Avatar } from './components/avatar'

export function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#171818]">
      <div className="w-96 h-[500px] rounded-2xl bg-[#101828] relative ">
        <div className='flex flex-col items-center justify-center  '>
          <img src={banner} alt="Banner" className='object-cover w-full rounded-t-2xl'/>
          <Avatar />
          <div className='flex flex-col items-center justify-center mt-4'>
            <h1 className='text-2xl text-white font-bold '>Bruno Gomes</h1>
            <span className='text-lg text-gray-500' >Desenvolvedor Web</span>
          </div>
          <div className='flex flex-col items-center justify-center mt-8 px-6'>
            <span className=' text-gray-400 text-sm text-center '>Desenvolvo interfases interativas e adaptaveis para qualquer tela.</span>
          </div>
          <div className='flex items-center justify-center mt-8 gap-4'>
            <button className='bg-green-600 text-gray-950 rounded-4xl px-2'>React</button>
            <button className='bg-green-600 text-gray-950 rounded-4xl px-2'>HTML</button>
            <button className='bg-green-600 text-gray-950 rounded-4xl px-2'>CSS</button>
          </div>
        </div>
        <img src={bg} alt="" className= 'absolute bottom-0 right-0 rounded-2xl' />
      </div>
    </main>
  )
}
