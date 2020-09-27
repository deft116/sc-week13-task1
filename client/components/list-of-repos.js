import React from 'react'

const ListOfRepos = ({ repos }) => {
  return (
    <div role="alert" className="flex flex-col justify-center items-center py-2">
      <div className="w-1/3 bg-teal-500 text-white font-bold rounded-t px-4 py-2">
        Repositories:
      </div>
      <div className="w-1/3 border border-t-0 border-teal-500 rounded-b px-4 py-3 text-gray-700">
        {repos.map((item) => (
          <p key={new Date().getTime()}>{item}</p>
        ))}
      </div>
    </div>
  )
}

ListOfRepos.propTypes = {}

export default React.memo(ListOfRepos)
