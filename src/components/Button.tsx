import { ReactNode } from 'react'

export const Button = ({
  children,
  disabled,
  onClick,
}: {
  disabled: boolean
  children: ReactNode
  onClick: (paramToTest: number) => void
}) => {
  return (
    <button
      style={{
        backgroundColor: disabled ? 'red' : 'blue',
        color: 'white',
        padding: '20px',
        borderRadius: '20px',
        border: '2px solid black',
      }}
      onClick={() => onClick(1000)}
    >
      {children}
    </button>
  )
}
