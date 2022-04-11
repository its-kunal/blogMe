import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import "./App.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter as Router } from "react-router-dom"
// import Local
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LoaderPage from './components/LoaderPage';
import Toaster from './components/toaster';
import MdRenderer from './components/mdRenderer';

import { useAuth } from "./authContext"

function App() {
  const [count, setCount] = useState(0)
  const { user, loading, signIn, logOut, flash } = useAuth()
  document.title = "BlogMe"



  return (
    <>
      {loading ? <LoaderPage /> :
        <Router>

          <div className="App">
            <Navbar />
            <div className="container">
              <MdRenderer />
            </div>

            <div className="container">
              {flash ? <Toaster /> : null}
              <button type="button" className="btn btn-success"
                onClick={() => {
                  signIn()
                }}
                disabled={user ? true : false}
              >SignIn with <i className="bi bi-google"></i></button>
              <button type="button" className="btn btn-danger" onClick={() => {
                logOut()
              }}
                disabled={user ? false : true}
              >Log Out <i className="bi bi-box-arrow-right"></i></button>
            </div>
            <Footer />

          </div>
        </Router>
      }
    </>
  )
}

export default App
