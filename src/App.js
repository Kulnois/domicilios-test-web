import React, { useState }  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import HomeView from './view/HomeView'
import LoginView from './view/LoginView'
import RegisterView from './view/RegisterView'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Route path='/' component={HomeView} exact />
      <Route path='/login' component={LoginView}  />
      <Route path='/register' component={RegisterView}  />
    </Router>
  );
}

export default App;
