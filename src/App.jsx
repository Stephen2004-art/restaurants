import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Home from "./pages/Home"
import Korean from "./pages/Korean"
import RestaurantDetails from "./pages/RestaurantDetails"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/restaurantdetails/:id" element={<RestaurantDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}






















 // <div className="App">
    //   <Home/>
    //   {/* <Korean/> */}
      
    // </div>


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App
