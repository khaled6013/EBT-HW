import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import { Route, createRoutesFromElements,RouterProvider } from 'react-router-dom';
import AddToCard from './pages/AddToCard';
import OutLet from './components/OutLet';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<OutLet></OutLet>}>
    <Route path="/" element={<Home />} />
    <Route path="ProductDetails/:id" element={<ProductDetails />} />
    <Route path="AddToCard" element={<AddToCard></AddToCard>} />
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
