import React from 'react'

function Google({title}) {
  return (
    <button className='flex gap-4 items-center justify-center w-80 bg-white rounded-full h-14 drop-shadow-md cursor-pointer hover:opacity-80'>
        <img src="/images/icons/google.png" alt="" width={35}/>
        <p className='text-lg font-medium'>{title}</p>
    </button>
  )
}

export default Google
