import React from 'react'
import LoginButton from './LoginButton'

const Home = (props) => {
  const search = props.location.search; // could be '?foo=bar
  const params = new URLSearchParams(search); //won't work with IE
  const code = params.get('code'); // bar
  return (
  <div>
    <h1>Login to get started!</h1>
    <LoginButton code={code}/>
  </div>
  )
}

export default Home