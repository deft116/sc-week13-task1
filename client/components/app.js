import React, { useState } from 'react'
import Head from './head'
import Main from './main'
import ListOfRepos from './list-of-repos'
import TextOfReadme from './text-of-readme'

const App = () => {
  const [userName, setUserName] = useState('')

  return (
    <div>
      <Head title="Hello" />
      <Main setUserName={setUserName} />
      <ListOfRepos />
      <TextOfReadme />
      {userName}
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
