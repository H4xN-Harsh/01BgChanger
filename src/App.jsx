import React, { useState } from 'react'

function App() {
  const colors = ["red","green","yellow"];
  const [color,setColor] = useState("bg-blue-600");
  const bgChanger = ()=>{
    const rand_idx = Math.floor(Math.random()*colors.length);
    setColor(colors[rand_idx]);
  };
  return (
    <div className={`w-full h-screen bg-${color}-600`}>
      <h1>background Color changer </h1>
      <button onClick={bgChanger}>change color</button>
    </div>
  )
}

export default App
