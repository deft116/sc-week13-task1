import React from 'react'
import Head from './head'
import Main from './main'

const App = () => {
  return (
    <div>
      <Head title="Hello" />
      <Main />
    </div>
  )
}

App.propTypes = {}

export default React.memo(App)
