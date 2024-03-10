import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/">
    <Route index element={<Home/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="Register" element={<Register/>}/>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
