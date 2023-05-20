import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home/Home'
import Signin from './components/Sign in/Signin'
import SignUp from './components/SignUp/SignUp'



const routes=createBrowserRouter([
	{
	path:'/',
	element:<Main/>,
	children:[
		{
		path:'/',
		element:<Home/>
		},{
      path:'/signin',
      element:<Signin/>
    },{
      path:'signup',
      element:<SignUp/>
    }
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
     
    </RouterProvider>
  </React.StrictMode>,
)
