import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '../components/Button'

describe('Button Component', () => {
  it('should render with red background if disabled', () => {
    render(
      <Button disabled onClick={() => {}}>
        Click me
      </Button>
    )

    const button = screen.getByRole('button', {
      name: 'Click me',
    })

    expect(button).toHaveStyle({
      backgroundColor: 'red',
    })
  })

  it('should call onClick prop on click', () => {
    const onClick = jest.fn()

    render(
      <Button disabled onClick={onClick}>
        Click me
      </Button>
    )

    const button = screen.getByText(/click me/i)

    fireEvent.click(button)

    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledWith(1000)
  })
})
