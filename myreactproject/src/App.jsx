import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./dashboard/home";
import About from "./dashboard/about";
import Project from "./dashboard/project";
import Contact from "./dashboard/contact";
import Skill from "./dashboard/skill";
import Layout from "./dashboard/layout";
import "./dashboard/design.css";

const App=()=>{

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="project" element={<Project/>}/>
      <Route path="skill" element={<Skill/>}/>
      <Route path="contact" element={<Contact/>}/> 
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;



