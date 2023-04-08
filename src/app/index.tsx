import { RouterProvider } from 'react-router-dom';
import { router } from '../pages';
import './styles/index.scss';
import DatesContextProvider from '../context/DatesContext';

function App() {
  return (
    <DatesContextProvider>
      <RouterProvider router={router} />
    </DatesContextProvider>
  );
}

export default App;
