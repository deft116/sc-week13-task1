import React from 'react'

const TextOfReadme = () => {
  return (
    <div className="flex justify-center items-center py-2">
      <input
        className="appearance-none bg-transparent border-b border-teal-500 w-1/3 text-gray-700 mr-3 py-2 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="начните поиск"
      />
      <button
        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="button"
      >
        TextOfReadme
      </button>
    </div>
  )
}

TextOfReadme.propTypes = {}

export default React.memo(TextOfReadme)
