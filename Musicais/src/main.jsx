import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import ListaProdutos from "./routes/ListaProdutos.jsx"

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Contato', element: <Contato />},
      {path: '/ListaProduto',element:<ListaProdutos/>},
      {path: '/Login', element: <Login />},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
