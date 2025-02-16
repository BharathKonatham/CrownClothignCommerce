
import Home from "./routes/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/sign-in/signin.component.jsx";

const Shop =()=> {
  return (<div>
    i am in shop
  </div>)
}
const App  = ()=> {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path="/sign-in" element={<Authentication />} />
      </Route>
      
    </Routes>
      
    </>
  );
}

export default App;
