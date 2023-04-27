import { useState } from 'react'
import { Button } from './Button'

function App() {
  const [message, setMessage] = useState(
    "Let's learn more about testing in React"
  )
  return (
    <div>
      <h1>Hello world!</h1>
      <p>{message}</p>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
        }}
        onClick={() => setMessage('New Message!')}
      >
        Change message
      </button>
      <Button disabled={false} onClick={() => setMessage('New Message!')}>
        Click me
      </Button>
    </div>
  )
}

export default App
