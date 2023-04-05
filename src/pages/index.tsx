import { createBrowserRouter } from 'react-router-dom';
import { Main } from './Main';
import { Root } from '../components/Root';

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
    ],
  },
]);
