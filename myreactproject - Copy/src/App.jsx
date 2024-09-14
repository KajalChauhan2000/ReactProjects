import { BrowserRouter,Routes, Route} from "react-router-dom";
import Insert from "./insert";
import Display from "./display";
import Home from "./Home";
import Layout from "./layout";
import Update from "./update";
import RecEdit from "./RecEdit";
import Search from "./search";

const App=()=>{

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>} >
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="insert" element={<Insert/>}/>
        <Route path="display" element={<Display/>}/>
        <Route path="update" element={<Update/>}/>
        <Route path="myedit/:id" element={<RecEdit/>}/>
        <Route path="search" element={<Search/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;







