import { Provider } from 'react-redux'
import store from './app/store'
import Retail from './Retail'

const App = () => {
  return (
    <Provider store={store}>
      <Retail />
    </Provider>
  )
}

export default App
