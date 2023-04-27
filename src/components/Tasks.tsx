import { useState } from 'react'
import { Button } from './Button'
import axios from 'axios'

interface ITasks {
  id: string
  title: string
}
export const Tasks = () => {
  const [tasks, setTasks] = useState<ITasks[]>([])
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  const handleClick = async () => {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos?_limit=10'
      )

      setTasks(data)
      setErrorMessage(null)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error?.message)
      }
    }
  }

  return (
    <>
      <h1>Tasks from API</h1>
      <Button disabled onClick={handleClick}>
        Get Tasks from API
      </Button>

      {tasks?.length > 0 &&
        tasks?.map((task) => <p key={task.id}>{task.title}</p>)}

      {errorMessage}
    </>
  )
}
