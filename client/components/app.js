import React from 'react'
import Head from './head'
import Main from './main'
import ListOfRepos from './list-of-repos'
import TextOfReadme from './text-of-readme'

const App = () => {
  return (
    <div>
      <Head title="Hello" />
      <Main />
      <ListOfRepos />
      <TextOfReadme />
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
