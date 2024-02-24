import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './App.css';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Locations from './pages/Locations';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Careers" element={<Careers />} />
        <Route path="Locations" element={<Locations />} />
      </Route>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
