import './App.css'
import { routes } from './routes/routes';
import { RouterProvider } from 'react-router-dom';

function App() {
   return (
      <div className='container'>
         <RouterProvider router={routes} />
      </div>
   )
}

export default App
