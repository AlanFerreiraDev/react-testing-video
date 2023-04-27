import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

// Jest não foi feito para testar componentes (DOM)

const sum = (numberOne: number, numberTwo: number) => {
  return numberOne + numberTwo
}

describe('App Component', () => {
  it('should sum correctly', () => {
    expect(sum(4, 4)).toBe(8)
  })

  it('should render App with hello message', () => {
    render(<App />)

    screen.getByText('Hello world!')
  })

  it('should change message on buton click', () => {
    render(<App />)

    screen.getByText("Let's learn more about testing in React")

    const textButtonChanged = screen.getByText(/change message/i)

    fireEvent.click(textButtonChanged)

    screen.getByText(/new message/i)

    const oldMessage = screen.queryByText(
      "Let's learn more about testing in React"
    )

    expect(oldMessage).not.toBeInTheDocument()
  })
})

export default {}
