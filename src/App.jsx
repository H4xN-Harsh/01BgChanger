import { useState } from 'react'
const colors = ["bg-red-500","bg-green-500","bg-yellow-500","bg-purple-500","bg-pink-500"];

function App() {
    
    






  const [color,setColor] = useState("bg-white");
  const bgChanger = ()=>{
    const rand_idx = Math.floor(Math.random()*colors.length);
    setColor(colors[rand_idx]);
  };
  return (
    <div className={`w-full h-screen ${color} `}>
      <div className='bg-violet-200 h-40 w-ful border-2 hover:bg-violet-300 border-violet-600 rounded-md p-6 flex justify-center items-center'>

      <h1 className='text-center text-7xl'>background Color changer </h1>
      </div>
      <div className='bottom-0'>

      <button className='border border-2 px-2 py-2 bg-yellow-400 hover:bg-amber-600' onClick={bgChanger}>change color</button>
      </div>
    </div>
  )
}

export default App
