import { render, screen } from '@testing-library/react'
import fakeEmployees from './mocks/employees'
import Table from './Table'

// learn how to test presentational components

it('renders with expected values', () => {
  render(<Table employees={fakeEmployees} />)

  expect(screen.getByRole('cell', { name: /john smith/i })).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: /engineering/i })).toBeInTheDocument()
  expect(screen.getByRole('cell', { name: /designer/i })).toBeInTheDocument()
})

it('has the correct class', () => {
  render(<Table employees={fakeEmployees} />)

  expect(screen.getByRole('table')).toHaveClass('table table-striped')
})
