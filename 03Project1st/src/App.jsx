import React, { useState } from 'react';


function App() {

  const [color, setColor] = useState("red");

  return (
    <div className='w-full	 h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg  bg-white px-5 py-2 rounded-3xl'>
      <button  onClick={() => setColor("red")}
      className='outline-none px-5 py-2 text-white bg-red-700 rounded-full shadow-sm' style={{backgroundColor: "red"}}>Red</button>
      <button onClick={() => setColor("green")}
       className='outline-none px-5 py-2 text-white bg-red-700 rounded-full shadow-lg' style={{backgroundColor: "green"}}>Green</button>
      <button onClick={() => setColor("blue")}
       className='outline-none px-5 py-2 text-white bg-red-700 rounded-full shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
      <button onClick={() => setColor("pink")}
       className='outline-none px-5 py-2 text-white bg-red-700 rounded-full shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
      <button onClick={() => setColor("gray")}
       className='outline-none px-5 py-2 text-white bg-red-700 rounded-full shadow-lg' style={{backgroundColor: "gray"}}>Gray</button>

      </div>
      </div>
    </div>
  );
}

export default App;
