import React from 'react'
import TopBookContainer from './TopBookContainer'
import BooksContainer from './BooksContainer'

const MainContainer = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-6">
        <TopBookContainer />
        <BooksContainer />
    </div>
  )
}

export default MainContainer;
