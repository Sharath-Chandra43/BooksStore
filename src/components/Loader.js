import React from 'react'

const Loader = () => {
  return (
    <div class="flex justify-center gap-2">
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
        <div class="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    </div>
  )
}

export default Loader