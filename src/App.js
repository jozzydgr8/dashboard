import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {Customers} from './Pages/Customers';
import{DashBoard} from './Pages/DashBoard';
import { Layout } from './Layout';
import { Merchant } from './Pages/Merchant';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path='dashboard' element={<Layout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='user' element={<Customers/>}/>
      <Route path='merchant' element={<Merchant />}/>
    </Route>
  

    <Route path='/' element={<Layout/>}>
      <Route index element={<DashBoard/>}/>
      <Route path='user' element={<Customers/>}/>
      <Route path='merchant' element={<Merchant />}/>
      
    </Route>
    </>
  ))
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;