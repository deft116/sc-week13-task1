import React, { useState } from 'react'
import axios from 'axios'

import Head from './head'
import Main from './main'
import ListOfRepos from './list-of-repos'
import TextOfReadme from './text-of-readme'

const App = () => {
  const [userName, setUserName] = useState('')
  const [repos, setRepos] = useState([])

  const getRepos = () => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.data)
      .then((res) => res.map((it) => it.name))
      .then((res) => setRepos(res))
  }

  return (
    <div>
      <Head title="Hello" />
      <Main setUserName={setUserName} getRepos={getRepos} />
      <ListOfRepos repos={repos} />
      <TextOfReadme />
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
