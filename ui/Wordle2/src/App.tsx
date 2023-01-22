import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Router, RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import {Provider} from "react-redux";
import {store} from "../redux/store/store";

function App() {
  return (
      <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
  )
}
export default App
