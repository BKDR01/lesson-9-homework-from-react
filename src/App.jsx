import { use, useState } from 'react'
import './App.css'
import CARD from './componentos/card/CARD'
import nike from './assets/img/Picture.png';
import karzina from './assets/img/icon/Cart.png';
import heard from './assets/img/icon/Heart.svg'
import data from './toole.js'
function App() {

  const [input, setInput] = useState('')
  
  const handleWriteToInput = (e) => {
    e.preventDefault()
    setInput(input)
  }


  return (


    <>
        <div className='mx-[77px]'>
          <h2 className='text-white text-[64px] font-bold mb-[83px]'>Products</h2>
          <div className='flex flex-wrap gap-[79px] w-[1400px]'>
              {/* <form action="" onSubmit={handleWriteToInput}>
                <input type="text" className='border text-white' onChange={(e) => setInput(e.target.value)}  />
                <button className={`rounded-[28px] px-[21px] flex items-center gap-[66px] border-solid bg-[#FFC700] border-black border-t-2 border-r-2 border-b-8 border-l-2`}>click</button>
              </form>
              <h2 className='text-white'>{input}</h2>

              {
                data?.map((item, index) => (
                  <div>
                    <p className='text-white'>{item.name}</p>
                  </div>
                ))
              } */}


              <CARD img={nike} karzina={karzina} className={'bg-[#CBCBCB]'} />
              <CARD img={nike} karzina={karzina} className={'bg-[#5CA7FF]'} />
              <CARD img={nike} karzina={karzina} Btnclass={'bg-green-300'} className={'bg-[#D083FF]'} />
              <CARD img={nike} karzina={karzina} Btnclass={'bg-yellow-300'} className={'bg-[#FF99E2]'} />
              <CARD img={nike} karzina={karzina} Btnclass={'bg-green-300'} className={'bg-[#CBCBCB]'} />
              <CARD img={nike} karzina={karzina} className={'bg-[#5CFF62]'} />

          </div>  
        </div>
    </>
  )
}

export default App
