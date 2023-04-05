import { RouterProvider } from 'react-router-dom';
import { router } from '../pages';
import './styles/index.scss';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
