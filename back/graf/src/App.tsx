import Header from "./main-cp/Header"
import './normalize.css'
import './App.css'
import { BrowserRouter } from "react-router"
import MainRoots from "./roots/MainRoots"


const App = () => {
  return <>
  <BrowserRouter>
    <Header/>
    <MainRoots/>
    
  </BrowserRouter>
  </>

}

export default App