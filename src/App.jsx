import { useContext, useEffect } from 'react';
import './App.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login'
import { Context } from './context/SpotifyContext';

function App() {
  const {setCode} = useContext(Context)
  const code = new URLSearchParams(location.search).get("code")
  useEffect(() => {
    setCode(code)
  },[code])
 return code ? <Dashboard code={code}/> : <Login/>
}

export default App
