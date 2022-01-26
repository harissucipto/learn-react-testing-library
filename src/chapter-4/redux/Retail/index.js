import { Provider } from 'react-redux'
import store from './app/store'
import Retail from './App'

const RetailApplication = () => {
  return (
    <Provider store={store}>
      <Retail />
    </Provider>
  )
}

export default RetailApplication
