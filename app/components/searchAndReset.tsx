'use client'

import React from 'react'

const SearchAndReset: React.FC<{
  handleSearch: () => void
  handleReset: () => void
  inputText: string
  placeholder?: string
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}> = ({
  handleSearch,
  handleReset,
  inputText,
  placeholder,
  handleInputChange,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const searchButton = document.getElementById('search-button')
      if (searchButton) {
        searchButton.click()
      }
    }
  }
  return (
    <div>
      <input
        type="text"
        id="search-box"
        className="text-xs md:text-sm lg:text-base w-52 md:w-72 lg:w-[26rem] px-4 py-2 border border-gray-400 rounded-lg flex-1 mb-2 mr-1 shadow-md"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        value={inputText}
        onChange={handleInputChange}
      />
      <button
        id="search-button"
        className="text-xs md:text-sm lg:text-base w-[3.5rem] md:w-16 lg:w-24 px-0 py-2 bg-blue-600 text-white rounded-lg hover:opacity-75 focus:outline-none mr-1 shadow-md"
        onClick={handleSearch}
      >
        検索
      </button>
      <button
        className="text-xs md:text-sm lg:text-base w-[3.5rem] md:w-16 lg:w-24 px-0 py-2 bg-blue-400 text-white rounded-lg hover:opacity-75 focus:outline-none shadow-md"
        onClick={handleReset}
      >
        リセット
      </button>
    </div>
  )
}

export default SearchAndReset
