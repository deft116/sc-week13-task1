import React from 'react'
import ReactMarkDown from 'react-markdown'

const TextOfReadme = ({ readMe }) => {
  return (
    <div role="alert" className="flex flex-col justify-center items-center py-2">
      <div className="w-2/3 bg-teal-500 text-white font-bold rounded-t px-4 py-2">ReadMe:</div>
      <div className="w-2/3 overflow-scroll border border-t-0 border-teal-500 rounded-b px-4 py-3 text-gray-700">
        <ReactMarkDown>{readMe}</ReactMarkDown>
      </div>
    </div>
  )
}

TextOfReadme.propTypes = {}

export default React.memo(TextOfReadme)
