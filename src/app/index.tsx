import { RouterProvider } from 'react-router-dom';
import { router } from '../pages';
import './styles/index.scss';
import 'swiper/css';
import 'swiper/css/effect-fade';
// import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
