import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Home from './components/Home/Home'
import Signin from './components/Sign in/Signin'
import SignUp from './components/SignUp/SignUp'
import AuthProvider from './providers/AuthProvider'
import Post from './components/Post/Post'
import PrivateRoutes from './routes/PrivateRoutes'



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
    },{
	path:'post',
	element:<PrivateRoutes><Post/></PrivateRoutes>
	
    }
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
	<RouterProvider router={routes}/>

  
    </AuthProvider>
    
  </React.StrictMode>,
)
