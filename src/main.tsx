
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import { setupStore } from './store/store.ts'
import { Provider } from 'react-redux'
import { StrictMode } from 'react'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
   <StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
   </StrictMode>
)
