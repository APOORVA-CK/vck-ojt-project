import { Route,BrowserRouter as Router,Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionPage from "./pages/AdmissionPage";
import './styles/Pages.css'
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import ContactUs from "./pages/ContactUs";
// import ContactUs from "./pages/ContactUs";
const App = () =>{
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/courses" element={<CoursesPage/>}/>
        <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/admission" element={<AdmissionPage/>}/> 
        {/* {/* <Route path="/" element={<NotFoundPage/>}/> */}
      </Routes>
          <ChatbotComponent/>

    </Router>
    </>
  )
}

export default App;