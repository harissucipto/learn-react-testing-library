import { RetailProvider } from './RetailContext'
import Retail from './Retail'
import fakeProducts from './mocks/fakeProducts'

const App = () => {
  return (
    <RetailProvider products={fakeProducts}>
      <Retail />
    </RetailProvider>
  )
}

export default App
