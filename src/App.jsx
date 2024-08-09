
import React,{useState} from "react"
function App() {
  const[result,setResult]= useState("1234");

  return (
  <div className="min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10">
    <h1 className="text-4xl text-yellow-300 font-bold">Calculator</h1>
    <div className="bg-green-300 p-4 max-w-96 rounded-md border-yellow-300 shadow-blue-600">
      <input className="bg-slate-900/80 rounded-md p-4 w-full text-2xl font-semibold text-white text-right tracking-wider boorder-2 border-red-400 shadow-inner shadow-current" type="text" value={result} disabled/>
      <p className="bg-slate-300 inline-block rounded-full px-3 py-1 my-2 text-red-500 text-sm tracking wider border-slate-400">Efuye's Calculator</p>
      <div className="grid grid-cols-4">
        <button type="button" className="operator">AC</button>
        <button type="button" className="operator">DEL</button>
        <button type="button" className="operator" id=".">.</button>
        <button type="button" className="operator "id="/">/</button>
      </div>
    </div>

  </div>
  )
}

export default App
