
import Home from "./routes/home/home.component";
import { Routes,Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.jsx";
import Authentication from "./routes/sign-in/signin.component.jsx";
import Shop from "./routes/shop/shop.component.jsx";

const App  = ()=> {


  return (
    <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path="/sign-in" element={<Authentication />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
      
    </Routes>
      
    </>
  );
}

export default App;
