import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import Home from './routes/Home.jsx';
import Sobre from './routes/Sobre.jsx';
import Portifolio from './routes/Portifolio.jsx'
import Contato from './routes/Contato.jsx'
import Error from './routes/Error.jsx';
import Login from './routes/Login.jsx';
import Produtos from "./routes/Produtos.jsx";
import ListaProdutos from "./routes/ListaProdutos.jsx"
import ExemploApi from './routes/ExemploApi.jsx';


const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Sobre', element: <Sobre />},
      {path: '/Portifolio', element: <Portifolio />},
      {path: '/Contato', element: <Contato />},
      {path: '/Produto',element:<Produtos/>},
      {path: '/ListaProduto',element:<ListaProdutos/>},
      {path: '/Login', element: <Login />},
      {path: '/ExemploApi',element:<ExemploApi/>}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
