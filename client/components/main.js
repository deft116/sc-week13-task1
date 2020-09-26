import React from 'react'

const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center py-2">
      <input
        className="bg-transparent border-b border-teal-500 w-1/3 text-gray-700 py-2 m-2 leading-tight focus:outline-none"
        type="text"
        placeholder="начните поиск"
      />
      <button
        className="bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white px-4 py-1 m-2 rounded"
        type="button"
      >
        Search
      </button>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
