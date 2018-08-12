import React from 'react'
import LoginButton from './LoginButton'
import ShowButton from './ShowButton'
import MapBoxMap from './MapBox'
import GetSpecifiedActivity from './GetSpecifiedActivity'

const Home = (props) => {
  const search = props.location.search; // could be '?foo=bar
  const params = new URLSearchParams(search); //won't work with IE
  const code = params.get('code'); // bar
  return (
  <div>
    <h1>Login to get started!</h1>
    <LoginButton code={code}/>
    <ShowButton code={code}/>
    <MapBoxMap/>
    <GetSpecifiedActivity/>
  </div>
  )
}

export default Home