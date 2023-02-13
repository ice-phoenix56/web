import './App.css'
import router from './app/index.jsx'
import {RouterProvider} from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider
        router={router}
      />
      <Footer />
    </div>
  )
}

export default App
