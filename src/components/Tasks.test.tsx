import { fireEvent, render, screen } from '@testing-library/react'
import { Tasks } from './Tasks'

import { rest } from 'msw'
import { setupServer } from 'msw/node'

describe('Tasks Component', () => {
  const worker = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/todos', (req, res, ctx) => {
      return res(
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false,
          },
        ])
      )
    })
  )

  beforeAll(() => worker.listen())

  beforeEach(() => {
    worker.resetHandlers()
  })

  it('should fetch and show tasks on buton click', async () => {
    render(<Tasks />)

    const button = screen.getByText(/get tasks from api/i)

    fireEvent.click(button)

    await screen.findByText('delectus aut autem')
  })

  it('should show error message on error', async () => {
    worker.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/todos',
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ message: 'An error happened' })
          )
        }
      )
    )

    render(<Tasks />)

    const button = screen.getByText(/get tasks from api/i)

    fireEvent.click(button)

    await screen.findByText('Request failed with status code 500')
  })
})
