import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[2]'>
        <div className="absolute flex justify-center w-full py-10 top-[5%] font-semibold text-xl text-zinc-500 tracking-tighter">Documents</div>
    <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-zinc-900 
    text-[14vw] font-semibold leading-none tracking-tighter">Docs</h1>
    </div>
  )
}

export default Background