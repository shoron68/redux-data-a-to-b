
import DataRecived from "./components/DataRecived"
import DataSend from "./components/DataSned"
import {createBrowserRouter, RouterProvider, Route,createRoutesFromElements} from "react-router-dom";

function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<DataSend/>}></Route>
      <Route path="/datarcv" element={<DataRecived/>}></Route>
    </Route>
  ))
  


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
