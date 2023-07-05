import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Hooks/useState'
import UserReducer from './Hooks/UserReducer'
import UseEffect from './Hooks/UseEffect'
function App() {
  const [count, setCount] = useState(0)

  return (
<div>
{/* <UseState /> */}
{/* <UserReducer /> */}
<UseEffect />
</div>
  )
}

export default App
