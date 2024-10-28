import './App.css'
import {ToastContainer} from "react-toastify";
import AppRoute from "./AppRoute.tsx";
import "react-toastify/dist/ReactToastify.css";
function App() {

  return (
      <main>
          <AppRoute/>
          <ToastContainer/>
      </main>
  )
}

export default App
