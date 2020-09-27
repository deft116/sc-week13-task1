import React, { useState } from 'react'
import axios from 'axios'

import Head from './head'
import Main from './main'
import ListOfRepos from './list-of-repos'
import TextOfReadme from './text-of-readme'

const App = () => {
  const [userName, setUserName] = useState('')
  const [repos, setRepos] = useState([])
  const [readMe, setReadMe] = useState()

  const getRepos = () => {
    axios
      .get(`https://api.github.com/users/${userName}/repos`)
      .then((res) => res.data)
      .then((res) => res.map((it) => it.name))
      .then((res) => setRepos(res))
  }

  const getReadMe = (event) => {
    const repo = event.target.textContent
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repo}/master/README.md`)
      .then((response) => setReadMe(response.data))
  }

  return (
    <div>
      <Head title="Hello" />
      <Main setUserName={setUserName} getRepos={getRepos} />
      <ListOfRepos repos={repos} getReadMe={getReadMe} />
      <TextOfReadme readMe={readMe} />
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
