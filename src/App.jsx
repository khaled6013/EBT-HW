import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import { Route, createRoutesFromElements,RouterProvider } from 'react-router-dom';

let router = createBrowserRouter(createRoutesFromElements(
  <Route >
    <Route path="/" element={<Home />} />
    <Route path="ProductDetails/:id" element={<ProductDetails />} />
  </Route>
));

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
