import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import LanguageDropdown from './LanguageDropdown'

test('LanguageDropdown, given selected menu item, displays selection', async () => {
  render(<LanguageDropdown />)

  user.click(screen.getByRole('button', { name: /programming language/i }))
  const selection = await screen.findByRole('menuitem', { name: /javascript/i })
  user.click(selection)

  const selectedLang = await screen.findByRole('heading', {
    name: /you selected: javascript/i
  })

  expect(selectedLang).toBeInTheDocument()
})
